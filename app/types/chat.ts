export interface Message {
    content: string;
    role: 'user' | 'assistant';
    timestamp: number;
}

export type EntityOption = {
    tokenId: string;
    name: string;
    address: string;
}
