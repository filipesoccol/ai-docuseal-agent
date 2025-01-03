import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../../types/chat';
import DocuSealButton from './DocuSealButton';
import MessageButton from './MessageButton';
import { useChat } from '../../hooks/useChat';

interface ChatBubbleProps {
    message: Message;
    sendMessage: (message: string) => void;
}

export default function ChatBubble({ message, sendMessage }: ChatBubbleProps) {
    const isAI = message.role === 'assistant';

    const renderContent = (content: string): React.ReactNode => {
        return (
            <ReactMarkdown
                className="prose dark:prose-invert max-w-none"
                components={{
                    code: ({ node, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '');
                        const language = match ? match[1] : '';
                        const value = String(children).replace(/\n$/, '');

                        // Check if it's an option block
                        if (language === 'option') {
                            return <MessageButton content={value} sendMessage={sendMessage} />;
                        }

                        // Check if it's a JSON code block
                        if (language === 'json') {
                            try {
                                const jsonData = JSON.parse(value);
                                return <DocuSealButton jsonData={jsonData} />;
                            } catch (error) {
                                return <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded" {...props}>{children}</code>;
                            }
                        }

                        // For other code blocks
                        const isInline = !className;
                        return isInline
                            ? <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded" {...props}>{children}</code>
                            : <code {...props}>{children}</code>;
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        );
    };

    return (
        <div className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
            <div
                className={`max-w-[70%] rounded-lg p-4 ${isAI
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-500 text-white'
                    }`}
            >
                {renderContent(message.content)}
            </div>
        </div>
    );
} 
