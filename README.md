# GhumoAI - AI-Powered Travel Planner

A modern web application that generates personalized travel itineraries using AI.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your API keys and configuration values in `.env`
   - Never commit the `.env` file to version control

4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The following environment variables are required:

- `VITE_OPENAI_API_KEY`: Your OpenAI API key
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Security Note

Never commit your `.env` file or expose your API keys. The `.env` file is already included in `.gitignore` to prevent accidental commits.
