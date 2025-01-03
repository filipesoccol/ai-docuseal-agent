# Chat DocuSeal

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
- `npm run test` - Run tests
- `npm run test:api` - Run API tests
- `npm run lint` - Run linting

## Project Structure

```
/src
  /app - Next.js app router pages
  /components - React components
  /lib - Shared libraries and utilities
  /api - API routes
  /types - TypeScript type definitions
  /hooks - Custom React hooks
  /utils - Utility functions
  /tests - Test files
```

## Environment Variables

Required environment variables:

- `DOCUSEAL_API_KEY` - DocuSeal API key
- `AI_API_KEY` - AI service API key
- `API_BASE_URL` - Base URL for API calls
