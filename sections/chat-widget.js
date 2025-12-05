(function () {
    const questionnairePush = 'Our questionnaire captures your priorities so we can tailor services, budget, and scheduling. Sharing details there is the fastest way to craft a proposal that matches your lifestyle.';
    const fitStatements = [
        'Mattéo Designs suits clients who want custom interiors that balance artful materials with livable function—everything from Santa Fe restaurants to coastal vacation homes.',
        'Because we align LEED-informed practices with made-to-measure furnishings, we’re a strong fit for homeowners who value sustainability, wellness, and bespoke craftsmanship.',
        'Clients who travel often or live outside New Mexico appreciate our Zoom-first collaboration, material libraries, and on-site visits within 25 miles of Santa Fe.'
    ];

    const knowledgeBase = [
        {
            keywords: ['service', 'offer', 'do you', 'capabilit', 'scope'],
            response: 'Mattéo Designs delivers full residential and commercial interior design: concepting, space planning, custom kitchens and baths, made-to-measure furniture, architectural drawings, FF&E specification, and project management from Santa Fe to coastal cities.'
        },
        {
            keywords: ['sustainab', 'leed', 'materials', 'green', 'healthy'],
            response: 'We integrate LEED-informed protocols, collaboration with certified consultants, and natural materials—think clay plaster, solid woods, and low-VOC finishes chosen to improve air quality and energy efficiency.'
        },
        {
            keywords: ['consult', 'book', 'schedule', 'appointment', 'meeting', 'zoom', 'in-person'],
            response: 'You can fill out the questionnaire or head to the scheduling section to pick a Zoom or in-person visit. I can also collect your preferred time and send it straight to the studio.'
        },
        {
            keywords: ['cost', 'price', 'budget', 'investment'],
            response: 'Budgets are customized after discovery. Whole-home renovations commonly begin in the mid-six figures; we map out phases, furnishings, and millwork so you understand investment levels before design work starts.'
        },
        {
            keywords: ['location', 'where', 'work', 'serving'],
            response: 'Headquartered in Santa Fe with projects nationwide—restaurants, boutique hotels, adobe residences, and remote clients connected via Zoom-first collaboration. Travel within 25 miles is complimentary.'
        },
        {
            keywords: ['rustic', 'ranch', 'mountain'],
            response: 'The Rustic Ranch series pairs timber beams, stone fireplaces, and custom furniture optimized for alkaline desert light. Galleries and case study links on the site show more photos.'
        },
        {
            keywords: ['wickser', 'wixer', 'tudor'],
            response: 'The Wixer (Wickser) residence blends Tudor façades with sunken lounges, stone-clad fireplaces, and bespoke banquettes—proof we can handle heritage exteriors with contemporary interiors.'
        },
        {
            keywords: ['education', 'credential', 'degree'],
            response: 'Mattéo completed the Arc ID certificate program at UCLA and earned a master’s in Interior Architecture from Cal Poly Pomona before opening the Santa Fe studio in 2022.'
        }
    ];

    function createMessage(text, type) {
        const message = document.createElement('div');
        message.className = `chat-message ${type}`;
        message.textContent = text;
        return message;
    }

    function createQuickActions() {
        const container = document.createElement('div');
        container.className = 'chat-actions';
        container.innerHTML = `
            <button type="button" data-action="questionnaire">Fill Questionnaire</button>
            <button type="button" data-action="schedule">Schedule Consultation</button>
            <button type="button" data-action="contact">Contact Info</button>
        `;
        return container;
    }

    function createLeadForm() {
        const form = document.createElement('form');
        form.className = 'chat-lead-form';
        form.innerHTML = `
            <label>
                Name
                <input type="text" name="leadName" required>
            </label>
            <label>
                Email
                <input type="email" name="leadEmail" required>
            </label>
            <label>
                Project Location
                <input type="text" name="leadLocation" required>
            </label>
            <label>
                Project Notes
                <textarea name="leadMessage" rows="3" placeholder="Timeline, renovation scope, preferred meeting format"></textarea>
            </label>
            <button type="submit">Share Details</button>
        `;
        return form;
    }

    function initWidget() {
        if (document.querySelector('.chat-launcher')) return;

        const launcher = document.createElement('button');
        launcher.className = 'chat-launcher';
        launcher.type = 'button';
        launcher.innerHTML = `<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4h16v11H6l-2 3V4z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg><span class=\"sr-only\">Chat</span>`;

        const panel = document.createElement('div');
        panel.className = 'chat-panel';
        const avatarPath = '../../legacy/images/matteo-cartoon.png';

        panel.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-info">
                    <img src="${avatarPath}" alt="Mattéo Designs" class="chat-avatar">
                    <div>
                        <strong>Mattéo Designs</strong>
                        <span>Typically replies same day</span>
                    </div>
                </div>
                <button class="chat-close" aria-label="Close chat">×</button>
            </div>
            <div class="chat-body">
                <div class="chat-messages" aria-live="polite"></div>
                <form class="chat-input">
                    <input type="text" placeholder="Send a message" aria-label="Message input" required />
                    <button type="submit">Send</button>
                </form>
            </div>
        `;

        document.body.appendChild(launcher);
        document.body.appendChild(panel);

        const closeBtn = panel.querySelector('.chat-close');
        const messages = panel.querySelector('.chat-messages');
        const form = panel.querySelector('.chat-input');
        const input = form.querySelector('input');

        const chatEndpoint = window.MATTEO_CHAT_ENDPOINT || (document.body && document.body.dataset && document.body.dataset.chatEndpoint) || '/api/chat';
        const leadEndpointDefault = window.MATTEO_LEAD_ENDPOINT || (document.body && document.body.dataset && document.body.dataset.leadEndpoint) || '/api/lead';
        const conversationHistory = [];

        function appendAssistantMessage(text) {
            const node = createMessage(text, 'assistant');
            messages.appendChild(node);
            messages.scrollTop = messages.scrollHeight;
            return node;
        }

        function appendUserMessage(text) {
            const node = createMessage(text, 'user');
            messages.appendChild(node);
            messages.scrollTop = messages.scrollHeight;
            return node;
        }

        function appendActions() {
            if (messages.querySelector('.chat-actions')) return;
            const actions = createQuickActions();
            actions.addEventListener('click', (event) => {
                const button = event.target.closest('button[data-action]');
                if (!button) return;
                const action = button.dataset.action;
                if (action === 'questionnaire') {
                    window.open('contact.html#questionnaire', '_blank');
                    appendAssistantMessage('Opening the project questionnaire for you. Feel free to keep chatting if you have more questions.');
                } else if (action === 'schedule') {
                    window.open('contact.html#schedule', '_blank');
                    appendAssistantMessage('You can pick a Zoom or in-person slot on the scheduling section. Let me know if a custom time is better.');
                } else if (action === 'contact') {
                    insertLeadForm();
                }
            });
            messages.appendChild(actions);
        }

        function findKnowledgeResponse(message) {
            const lower = message.toLowerCase();
            for (const item of knowledgeBase) {
                if (item.keywords.some(keyword => lower.includes(keyword))) {
                    return item.response;
                }
            }
            return null;
        }

        function gatherContext(message) {
            const match = findKnowledgeResponse(message);
            return match || 'Mattéo Designs is a Santa Fe-based interior design studio delivering sustainable residential and commercial work nationwide.';
        }

        function insertLeadForm() {
            if (messages.querySelector('.chat-lead-form')) return;
            const form = createLeadForm();
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const data = new FormData(form);
                const payload = {
                    name: data.get('leadName'),
                    email: data.get('leadEmail'),
                    location: data.get('leadLocation'),
                    message: data.get('leadMessage') || ''
                };
                notifyLead(payload);
                form.remove();
                appendAssistantMessage('Thank you! I just shared those details with Mattéo so the team can follow up.');
            });
            messages.appendChild(form);
            messages.scrollTop = messages.scrollHeight;
        }

        function notifyLead(payload) {
            window.dispatchEvent(new CustomEvent('matteo-lead', { detail: payload }));
            if (typeof window.MATTEO_LEAD_HANDLER === 'function') {
                try {
                    window.MATTEO_LEAD_HANDLER(payload);
                } catch (error) {
                    console.error('Custom lead handler error', error);
                }
            }

            const endpoint = leadEndpointDefault;

            const fallbackToEmail = () => {
                const subjectFallback = encodeURIComponent('New Mattéo Designs Website Lead');
                const bodyFallback = encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\nLocation: ${payload.location}\nNotes: ${payload.message}`);
                window.open(`mailto:matteo@matteodesigns.com?subject=${subjectFallback}&body=${bodyFallback}`);
            };

            if (endpoint) {
                fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...payload,
                        source: 'chat-widget',
                        timestamp: new Date().toISOString()
                    })
                }).catch(error => {
                    console.error('Lead endpoint error', error);
                    fallbackToEmail();
                });
            } else {
                fallbackToEmail();
            }
        }

        function composeFitResponse(context){
            const fitLine = fitStatements[Math.floor(Math.random()*fitStatements.length)];
            return `${context}\n\n${fitLine}\n\n${questionnairePush}`;
        }

        async function respond(message) {
            const context = composeFitResponse(gatherContext(message));
            const pending = appendAssistantMessage('Thinking…');
            pending.classList.add('assistant-pending');
            try {
                const response = await fetch(chatEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message,
                        context,
                        history: conversationHistory.slice(-10)
                    })
                });
                if (!response.ok) {
                    throw new Error('Assistant unavailable');
                }
                const data = await response.json();
                const reply = (data && data.reply) || context;
                pending.remove();
                appendAssistantMessage(reply);
                conversationHistory.push({ role: 'assistant', content: reply });
                if (conversationHistory.length > 12) conversationHistory.shift();
                window.dispatchEvent(new CustomEvent('matteo-chat-response', { detail: { reply } }));
                if (/consult|book|project|budget|questionnaire|schedule|zoom|in-person/i.test(message + reply)) {
                    appendActions();
                    insertLeadForm();
                }
            } catch (error) {
                console.error('Chat request failed', error);
                pending.remove();
                const fallback = context || 'Thank you for reaching out — I can also help via the contact page if the chat is busy.';
                appendAssistantMessage(fallback);
            }
        }

        launcher.addEventListener('click', () => {
            const isOpen = panel.classList.toggle('open');
            if (isOpen) {
                input.focus();
            }
        });

        closeBtn.addEventListener('click', () => {
            panel.classList.remove('open');
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const message = input.value.trim();
            if (!message) return;
            appendUserMessage(message);
            input.value = '';
            conversationHistory.push({ role: 'user', content: message });
            if (conversationHistory.length > 12) conversationHistory.shift();

            window.dispatchEvent(new CustomEvent('matteo-chat-request', { detail: { message } }));
            respond(message);
        });

        appendAssistantMessage('Hi there! Let us know how we can help with your project.');
        appendActions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();

(function(){
    function optimizeImages(){
        document.querySelectorAll('img').forEach(img=>{
            if(!img.hasAttribute('loading')){
                img.setAttribute('loading','lazy');
            }
            if(!img.hasAttribute('decoding')){
                img.setAttribute('decoding','async');
            }
        });
    }

    if(document.readyState==='loading'){
        document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
        optimizeImages();
    }
})();
