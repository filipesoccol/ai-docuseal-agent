import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const baseURL = "https://api.aimlapi.com/v1";
// const baseURL = "https://us-central1-aiplatform.googleapis.com/v1/projects/test-project-eff92/locations/us-central1/publishers/google/models/gemini-2.0-flash-exp:streamGenerateContent"
const apiKey = process.env.AI_API_KEY; // Make sure to add this to your environment variables

const api = new OpenAI({
    apiKey,
    baseURL,
});

const systemPrompt = `You are a real state agent machine that will help user to fill a EIN Form, be polite and formal. 
I want that your response use Markdown format. 
Your purpose is to collect the information from the user and then you will need to fill the EIN Form and return the result in JSON format.
The informations required are: Name, Last Name, Email, Address, City, State, Zip Code, Country, Company Name.

If the user doesn't provide all the informations, ask for the missing informations. Never confirm the informations provided by the user before you hall all of it.

The resulting JSON should be in the following format:
{
  name: "",
  last_name: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zip_code: "",
  country: "",
  company_name: ""
}

Only return the JSON when you have all necessary informations. Do not mention that you are returning a JSON at any moment, mention that you are filling the form and will request user to sign.
If something isn't clear ask again the user`;

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();

        const completion = await api.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                ...messages,
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        return NextResponse.json({
            content: completion.choices[0].message.content,
            role: 'assistant',
            id: Date.now().toString(),
            timestamp: Date.now(),
        });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Failed to process chat request' },
            { status: 500 }
        );
    }
} 
