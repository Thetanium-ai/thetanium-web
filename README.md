# Thetanium Web

AI-Powered Smart Contract Security Platform

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk (Display), Inter (Body)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The site will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles & Tailwind
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Navbar.tsx      # Navigation
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features grid
│   ├── HowItWorks.tsx  # How it works steps
│   ├── Pricing.tsx     # Pricing tiers
│   ├── Integrations.tsx# Dev integrations
│   ├── Chains.tsx      # Supported chains
│   ├── EarlyAccess.tsx # Signup form
│   ├── CTA.tsx         # Call to action
│   ├── Footer.tsx      # Footer
│   └── ShieldLogo.tsx  # Logo component
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Blue | `#0A1628` | Primary text, backgrounds |
| Royal Blue | `#1E3A5F` | Secondary text, accents |
| Accent Blue | `#3B82F6` | CTAs, links, highlights |
| Silver | `#C0C7D0` | Muted text, borders |
| Light Blue | `#EBF4FF` | Section backgrounds |
| Accent Green | `#10B981` | Success states |

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create a `.env.local` file:

```env
# API endpoints (when ready)
NEXT_PUBLIC_API_URL=https://api.thetanium.ai

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## License

© 2026 Thetanium. All rights reserved.
