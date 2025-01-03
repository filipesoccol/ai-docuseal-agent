import React from 'react';

interface MessageButtonProps {
    content: string;
    sendMessage: (message: string) => void;
}

export default function MessageButton({ content, sendMessage }: MessageButtonProps) {
    return (
        <button
            onClick={() => sendMessage(content)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mb-2 rounded transition-colors"
        >
            <span className="flex items-center gap-2">
                <div className="text-sm text-left overflow-hidden text-ellipsis whitespace-break-spaces">{content}</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </span>
        </button>
    );
} 
