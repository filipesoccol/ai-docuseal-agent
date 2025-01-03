# AI DocuSeal Agent

A chat interface with AI assistance for filling DocuSeal documents.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.local.example` to `.env.local` and fill in your API keys
4. Run the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server
- `npm run lint` - Run linting

## Project Structure

```
/app
  /components - React components
  /api - API routes
  /types - TypeScript type definitions
  /hooks - Custom React hooks
```

## Environment Variables

Required environment variables:

- `AI_API_KEY` - AI service API key
