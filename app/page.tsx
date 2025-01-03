'use client';
import ChatContainer from '@/components/Chat/ChatContainer';
import DocuSealPanel from '@/components/DocuSeal/DocuSealPanel';

import { useDocuSealContext } from '@/contexts/DocuSealContext';

import '@/globals.css';

export default function Home() {

    const { docusealValues } = useDocuSealContext();

    return (
        <main className="grid grid-cols-1 md:flex min-h-screen bg-purple-100">
            <div className={`transition-all duration-300 ease-in-out w-full h-full`}>
                <DocuSealPanel />
            </div>
            <div className={`transition-all duration-300 ease-in-out h-full
              ${docusealValues ? 'translate-x-full md:w-1/2 md:translate-x-0' : 'w-full translate-x-0'}`}>
                <ChatContainer />
            </div>
        </main>
    );
} 
