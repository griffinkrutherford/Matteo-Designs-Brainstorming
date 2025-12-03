(function () {
    function createMessage(text, type) {
        const message = document.createElement('div');
        message.className = `chat-message ${type}`;
        message.textContent = text;
        return message;
    }

    function initWidget() {
        if (document.querySelector('.chat-launcher')) return;

        const launcher = document.createElement('button');
        launcher.className = 'chat-launcher';
        launcher.type = 'button';
        launcher.innerHTML = '<span aria-hidden="true">💬</span><span class="sr-only">Chat</span>';

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

        function appendAssistantMessage(text) {
            messages.appendChild(createMessage(text, 'assistant'));
            messages.scrollTop = messages.scrollHeight;
        }

        function appendUserMessage(text) {
            messages.appendChild(createMessage(text, 'user'));
            messages.scrollTop = messages.scrollHeight;
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

            window.dispatchEvent(new CustomEvent('matteo-chat-request', { detail: { message } }));

            setTimeout(() => {
                const reply = 'Thanks for your note! A Mattéo Designs team member will reply shortly.';
                appendAssistantMessage(reply);
                window.dispatchEvent(new CustomEvent('matteo-chat-response', { detail: { reply } }));
            }, 600);
        });

        appendAssistantMessage('Hi there! Let us know how we can help with your project.');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
