import { useState } from 'react';

interface DocuSealButtonProps {
    jsonDocumet: any;
}

export default function DocuSealButton({ jsonDocumet }: DocuSealButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        try {
            setIsLoading(true);

            const response = await fetch('/api/docuseal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    documentId: '',
                    jsonDocument: jsonDocumet,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get signing URL');
            }

            const { url } = await response.json();

            // Open DocuSeal in a new tab
            window.open(url, '_blank', 'noopener,noreferrer');
        } catch (error) {
            console.error('Error opening DocuSeal:', error);
            // Add error handling/notification here
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
            {isLoading ? 'Loading...' : 'Sign Document'}
        </button>
    );
} 
