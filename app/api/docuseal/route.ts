import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { documentId } = await request.json();

        // Replace with your DocuSeal API endpoint and key
        const DOCUSEAL_API_URL = process.env.DOCUSEAL_API_URL;
        const DOCUSEAL_API_KEY = process.env.DOCUSEAL_API_KEY;

        const response = await fetch(`${DOCUSEAL_API_URL}/submissions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${DOCUSEAL_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                template_id: documentId,
                // Add any additional parameters required by DocuSeal
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to create DocuSeal submission');
        }

        const data = await response.json();
        return NextResponse.json({ url: data.signing_url });
    } catch (error) {
        console.error('DocuSeal API error:', error);
        return NextResponse.json(
            { error: 'Failed to generate signing URL' },
            { status: 500 }
        );
    }
} 
