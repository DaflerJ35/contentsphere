# ContentSphere

ContentSphere is a powerful content transformation platform that converts a single source asset (video, audio, or text) into optimized, platform-specific content for various social media platforms including YouTube, TikTok, Instagram, LinkedIn, Twitter, and blogs.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (app-router), React 18, TypeScript
- **Styling**: Tailwind CSS v3 (JIT)
- **Backend**: tRPC on Node 18
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **State Management**: React Query (TanStack Query) for server state, Zustand for client state

## 🛠️ Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm (recommended) or npm
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd contentsphere
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
contentsphere/
├── app/                 # Next.js app router pages
├── components/          # React components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and shared logic
├── public/             # Static assets
├── styles/             # Global styles and Tailwind config
└── types/              # TypeScript type definitions
```

## 🔒 Authentication

The project uses Supabase Authentication. Users can:
- Sign up with email/password
- Sign in with social providers
- Manage their profile and settings

## 🎨 UI Components

The project uses a combination of:
- Radix UI for accessible components
- Tailwind CSS for styling
- Custom components built on top of these foundations

## 🧪 Testing

Run tests with:
```bash
pnpm test
```

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## 📝 License

[Your License]

## 👥 Contributing

[Your Contributing Guidelines] 