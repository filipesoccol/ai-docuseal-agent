"use client"
import React from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { useChat } from '../../hooks/useChat';

export default function ChatContainer() {
    const { messages, sendMessage } = useChat();

    return (
        <div className="flex flex-col h-screen max-w-3xl mx-auto">
            <div className="flex-1 overflow-y-auto p-4">
                <ChatMessages messages={messages} sendMessage={sendMessage} />
            </div>
            <div className="border-t p-4">
                <ChatInput onSendMessage={sendMessage} />
            </div>
        </div>
    );
} 
