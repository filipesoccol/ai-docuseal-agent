'use client';
import ChatContainer from '@/components/Chat/ChatContainer';
import DocuSealPanel from '@/components/DocuSeal/DocuSealPanel';

import { useDocuSealContext } from '@/contexts/DocuSealContext';

import '@/globals.css';

export default function Home() {

    const { docusealValues } = useDocuSealContext();

    return (
        <main className="flex min-h-screen bg-purple-100">
            <DocuSealPanel />
            <div className={`transition-all duration-300 ease-in-out 
              ${docusealValues ? 'md:w-1/2 -translate-x-full md:translate-x-0' : 'w-full translate-x-0'}`}>
                <ChatContainer />
            </div>
        </main>
    );
} 
