import React from 'react';
import { Message } from '../../types/chat';
import ChatBubble from './ChatBubble';

interface ChatMessagesProps {
    messages: Message[];
    sendMessage: (message: string) => void;
}

export default function ChatMessages({ messages, sendMessage }: ChatMessagesProps) {

    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div ref={messagesEndRef} id="messages" className="flex flex-col space-y-4">
            {messages.map((message, index) => (
                <ChatBubble
                    key={index}
                    message={message}
                    sendMessage={sendMessage}
                />
            ))}
        </div>
    );
} 
