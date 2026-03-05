# Muhammad Rizwan - Portfolio

A modern, animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a premium dark/light theme, smooth scroll animations, and responsive design.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 12
- **Theming:** next-themes (dark/light mode)
- **Icons:** Heroicons
- **Fonts:** Geist Sans & Geist Mono

## Features

- Typewriter text animation cycling through roles
- Scroll-triggered section animations with stagger effects
- Spotlight hover effect on cards
- Animated timeline for work experience
- Magnetic button interactions
- Parallax background orbs
- Scroll progress indicator
- Animated counters for stats
- Word-by-word text reveal
- Floating label contact form
- Mobile-responsive navigation with hamburger menu
- Custom scrollbar styling
- Dot pattern and noise texture backgrounds

## Sections

| Section | Description |
|---------|-------------|
| Hero | Intro with typewriter effect, gradient text, and CTA buttons |
| About | Bento grid layout with bio, stats, and code snippet |
| Skills | Categorized skill cards (Frontend, Backend, Databases, Tools) |
| Projects | Featured projects with browser mockup previews |
| Experience | Interactive timeline of work history |
| Contact | Contact form with floating labels and social links |

## Project Structure

```
app/
├── components/
│   ├── Hero.tsx              # Landing section with typewriter
│   ├── Navbar.tsx            # Navigation bar with theme toggle
│   ├── About.tsx             # About section with bento grid
│   ├── Skills.tsx            # Skills categorized in cards
│   ├── Projects.tsx          # Featured project showcase
│   ├── Experience.tsx        # Work experience timeline
│   ├── Contact.tsx           # Contact form and links
│   ├── Footer.tsx            # Footer with social links
│   ├── SpotlightCard.tsx     # Reusable spotlight hover card
│   ├── SectionHeading.tsx    # Section title component
│   ├── ThemeProvider.tsx     # Dark/light theme wrapper
│   ├── ThemeToggle.tsx       # Theme switch button
│   ├── AnimatedCounter.tsx   # Number counter on scroll
│   ├── ScrollProgress.tsx    # Top scroll progress bar
│   └── TextReveal.tsx        # Word-by-word reveal animation
├── hooks/
│   └── useScrollAnimation.ts # Scroll animation variants and config
├── lib/
│   └── data.ts               # Portfolio content data
├── fonts/                    # Geist font files
├── globals.css               # Global styles and utilities
├── layout.tsx                # Root layout with metadata
└── page.tsx                  # Home page
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/rizwan/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Customization

All portfolio content (personal info, skills, projects, experience) is centralized in `app/lib/data.ts`. Update this file to personalize the portfolio with your own information.

### Theme Colors

Custom colors are defined in `tailwind.config.ts`:

- **Primary:** Indigo (customizable via the `primary` color scale)
- **Accent:** Cyan (customizable via the `accent` color scale)

## Deployment

Deploy to [Vercel](https://vercel.com) for the best Next.js experience:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

## License

This project is open source and available under the [MIT License](LICENSE).
