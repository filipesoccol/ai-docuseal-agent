import { useState } from 'react';
import { DocuSealData } from '@/types/docuseal';

export const useDocuSeal = () => {
    const [docusealValues, setDocusealValues] = useState<DocuSealData | null>(null);

    const openDocuSeal = (jsonData: DocuSealData) => {
        console.log('setou');
        setDocusealValues(jsonData);
    };

    const closeDocuSeal = () => {
        setDocusealValues(null);
    };

    return {
        docusealValues,
        openDocuSeal,
        closeDocuSeal
    };
}; 
