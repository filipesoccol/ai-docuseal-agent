"use client"
import { useState } from 'react';
import { EntityOption, Message } from '../types/chat';


const entityOptions: EntityOption[] = [
    {
        tokenId: "1",
        name: "Single-Member LLC",
        address: "123 Main Street, Suite 100, San Francisco, CA 94105"
    },
    {
        tokenId: "2",
        name: "Multi-Member LLC",
        address: "456 Market Street, Floor 15, New York, NY 10013"
    },
    {
        tokenId: "3",
        name: "C Corporation",
        address: "789 Tech Boulevard, Building C, Austin, TX 78701"
    }
];

const formatEntityOptionsAsMarkdown = (entities: EntityOption[]): string => {
    return entities.map(entity => (
        `\`\`\`option\ncompany name: ${entity.name}\ncompany address: ${entity.address}\n\`\`\``
    )).join('\n\n');
};

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            content: `Hello! I can help you fill out your EIN document. First select the entity you want to use to fill the EIN Form.\n\n${formatEntityOptionsAsMarkdown(entityOptions)}`,
            role: 'assistant',
            timestamp: Date.now(),
        }
    ]);

    const sendMessage = async (content: string) => {
        // Add user message
        const userMessage: Message = {
            content,
            role: 'user',
            timestamp: Date.now(),
        };

        // Store all previous messages plus the new user message
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);

        try {
            // Send message to API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: updatedMessages.map(message => ({
                        role: message.role,
                        content: message.content
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const assistantMessage = await response.json();
            setMessages([...updatedMessages, assistantMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            // Optionally handle error in UI
        }
    };

    return {
        messages,
        sendMessage,
    };
} 
