# PetriVerse AI - Base Mini App

Create, customize, and compete with AI-powered virtual pets on Base.

## Features

- **AI Pet Generation**: Create unique virtual pets with AI-generated traits and abilities
- **Trait Customization**: Spend energy to modify and enhance your pet's capabilities
- **Community Challenges**: Participate in care challenges with other pet owners
- **Pet Progression**: Level up your pets through consistent care and challenge participation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via MiniKit & OnchainKit)
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI API (for pet generation)
- **TypeScript**: Full type safety

## Getting Started

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd petriverse-ai
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your API keys:
   - `NEXT_PUBLIC_MINIKIT_API_KEY`: Your MiniKit API key
   - `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key  
   - `OPENAI_API_KEY`: Your OpenAI API key for pet generation

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main application page
│   ├── providers.tsx      # MiniKit & OnchainKit providers
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── PetCard.tsx        # Pet display component
│   ├── ChallengeSection.tsx # Challenge management
│   ├── CreatePetModal.tsx # Pet creation interface
│   └── CustomizePetModal.tsx # Pet customization
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript definitions
│   ├── mockData.ts        # Sample data and generators
│   └── utils.ts           # Helper functions
```

## Key Components

### Pet Management
- Create AI-generated pets with unique traits
- Customize pet abilities using energy currency
- Track pet progression and experience

### Challenge System
- Join community care challenges
- Compete based on pet traits and user interaction
- Earn rewards and recognition

### Base Integration
- Built as a Base Mini App using MiniKit
- OnchainKit integration for future blockchain features
- Prepared for tokenization and on-chain assets

## Design System

The app uses a cohesive design system with:
- **Colors**: Purple/pink gradient theme matching Base branding
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable UI components with consistent styling
- **Animations**: Subtle animations for enhanced user experience

## Future Enhancements

- Real AI pet generation using OpenAI DALL-E
- Telegram bot integration for notifications
- On-chain pet ownership and trading
- Advanced challenge mechanics
- Social features and pet battles

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
