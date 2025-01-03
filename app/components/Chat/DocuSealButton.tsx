'use client';

import { useDocuSealContext } from '@/contexts/DocuSealContext';
import { DocuSealData } from '@/types/docuseal';

interface DocuSealButtonProps {
    jsonData: DocuSealData;
}

export default function DocuSealButton({ jsonData }: DocuSealButtonProps) {
    const { openDocuSeal } = useDocuSealContext();

    const handleDocuSealClick = async () => {
        try {
            openDocuSeal(jsonData);
        } catch (error) {
            console.error('Error creating DocuSeal submission:', error);
        }
    };

    return (
        <button
            onClick={handleDocuSealClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Open DocuSeal
        </button>
    );
} 
