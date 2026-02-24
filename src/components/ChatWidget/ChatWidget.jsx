import React, { useState } from 'react';
import Style from './ChatWidget.module.css';
import { sendChatMessage } from '../../api/chatApi';

const PREBUILT_QUESTIONS = [
    'What are Sarvjeet\'s key skills?',
    'Tell me about his main projects.',
    'How can I contact Sarvjeet?',
];

const formatAssistantReply = (data) => {
    const answer =
        (typeof data === 'string' && data) ||
        data?.answer ||
        data?.response ||
        data?.message ||
        'I could not format the response right now.';

    const sources = Array.isArray(data?.sources) ? data.sources.filter(Boolean) : [];
    if (!sources.length) {
        return answer;
    }

    return `${answer}\n\nSources: ${sources.join(', ')}`;
};

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: 'Hi! Ask me anything about Sarvjeet\'s resume.' },
    ]);

    const sendMessage = async (rawMessage) => {
        const message = rawMessage.trim();
        if (!message || loading) {
            return;
        }

        setMessages((prev) => [...prev, { role: 'user', text: message }]);
        setInput('');
        setLoading(true);

        try {
            const data = await sendChatMessage(message);
            setMessages((prev) => [...prev, { role: 'assistant', text: formatAssistantReply(data) }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', text: 'Unable to reach chat service right now.' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendMessage(input);
    };

    return (
        <div className={Style.chatWidgetWrap}>
            {isOpen && (
                <div className={Style.chatPanel}>
                    <div className={Style.chatHeader}>AI Resume Chat</div>
                    <div className={Style.chatBody}>
                        {messages.map((message, index) => (
                            <div
                                key={`${message.role}-${index}`}
                                className={message.role === 'user' ? Style.userMessage : Style.botMessage}
                            >
                                {message.text}
                            </div>
                        ))}
                        {loading && <div className={Style.botMessage}>Typing...</div>}
                    </div>

                    <div className={Style.quickQuestions}>
                        {PREBUILT_QUESTIONS.map((question) => (
                            <button
                                key={question}
                                type="button"
                                className={Style.quickQuestionBtn}
                                onClick={() => sendMessage(question)}
                                disabled={loading}
                            >
                                {question}
                            </button>
                        ))}
                    </div>

                    <form className={Style.chatInputForm} onSubmit={handleSubmit}>
                        <input
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Ask about resume..."
                        />
                        <button type="submit" disabled={loading}>
                            Send
                        </button>
                    </form>
                </div>
            )}

            <button
                className={Style.chatBubble}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle AI chat"
            >
                AI
            </button>
        </div>
    );
};

export default ChatWidget;
