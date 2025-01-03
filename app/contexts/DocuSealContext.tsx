'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useDocuSeal } from '@/hooks/useDocuSeal';

type DocuSealContextType = ReturnType<typeof useDocuSeal>;

const DocuSealContext = createContext<DocuSealContextType | undefined>(undefined);

export function DocuSealProvider({ children }: { children: ReactNode }) {
    const docuSeal = useDocuSeal();

    return (
        <DocuSealContext.Provider value={docuSeal}>
            {children}
        </DocuSealContext.Provider>
    );
}

export function useDocuSealContext() {
    const context = useContext(DocuSealContext);
    if (context === undefined) {
        throw new Error('useDocuSealContext must be used within a DocuSealProvider');
    }
    return context;
} 
