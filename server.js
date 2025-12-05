import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'claude-3-sonnet-20240229';
const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL || '';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: '2mb' }));
app.use(express.static(__dirname));

const systemPrompt = `You are the concierge for Mattéo Designs, a Santa Fe-based interior design studio led by Mattéo Bitetti (Arc ID certificate from UCLA, master's in Interior Architecture from Cal Poly Pomona). Highlight residential and commercial capabilities, sustainable/LEED-informed practices, custom furniture, and remote collaboration. Be warm, concise, and always guide the visitor toward filling the questionnaire or booking a consultation.`;

function mapHistoryToAnthropic(history = []) {
  return history
    .filter(entry => entry && entry.role && entry.content)
    .slice(-10)
    .map(entry => ({
      role: entry.role === 'assistant' ? 'assistant' : 'user',
      content: [{ type: 'text', text: String(entry.content).slice(0, 2000) }]
    }));
}

app.post('/api/chat', async (req, res) => {
  try {
    if (!CLAUDE_API_KEY) {
      return res.status(500).json({ error: 'Claude API key is not configured.' });
    }

    const { message, history = [], context = '' } = req.body || {};
    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const messages = mapHistoryToAnthropic(history);
    messages.push({ role: 'user', content: [{ type: 'text', text: message }] });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: CLAUDE_MODEL,
        max_tokens: 600,
        temperature: 0.7,
        system: context ? `${systemPrompt}\n\nContext to reference:\n${context}` : systemPrompt,
        messages
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Claude API error:', errorText);
      return res.status(502).json({ error: 'Assistant unavailable. Please try again shortly.' });
    }

    const data = await response.json();
    const reply = (data?.content || [])
      .map(block => block?.text || '')
      .join('\n')
      .trim();

    return res.json({ reply: reply || 'Thanks for reaching out — the studio will follow up shortly.' });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
});

app.post('/api/lead', async (req, res) => {
  const { name, email, location = '', message = '' } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const payload = {
    name,
    email,
    location,
    message,
    source: 'chat-widget',
    receivedAt: new Date().toISOString()
  };

  try {
    if (LEAD_WEBHOOK_URL) {
      await fetch(LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      console.log('Lead received:', payload);
    }

    return res.json({ success: true });
  } catch (error) {
    console.error('Lead forward error:', error);
    return res.status(502).json({ error: 'Could not forward lead at this time.' });
  }
});

app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
