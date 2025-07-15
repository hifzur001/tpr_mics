Repository: hifzur001/tpr_mics
Files analyzed: 99

Estimated tokens: 115.7k

Directory structure:
└── hifzur001-tpr_mics/
    ├── components.json
    ├── next.config.mjs
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── about/
    │   │   ├── careers/
    │   │   │   └── page.tsx
    │   │   ├── our-story/
    │   │   │   └── page.tsx
    │   │   └── our-team/
    │   │       └── page.tsx
    │   ├── contact/
    │   │   └── page.tsx
    │   ├── portfolio/
    │   │   ├── page.tsx
    │   │   └── products/
    │   │       └── [slug]/
    │   │           ├── page.tsx
    │   │           └── ProductDetailPageClient.tsx
    │   └── services/
    │       ├── ai-r-d/
    │       │   └── page.tsx
    │       ├── amazon-ads/
    │       │   └── page.tsx
    │       ├── crm-solutions/
    │       │   └── page.tsx
    │       ├── google-my-business/
    │       │   └── page.tsx
    │       ├── mobile-development/
    │       │   └── page.tsx
    │       ├── seo-services/
    │       │   └── page.tsx
    │       ├── software-development/
    │       │   └── page.tsx
    │       └── web-development/
    │           └── page.tsx
    ├── components/
    │   ├── BusinessCall.tsx
    │   ├── CustomerReviews.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── IdeaConceptSolution.tsx
    │   ├── Integration.tsx
    │   ├── Partners.tsx
    │   ├── QuickSupport.tsx
    │   ├── Roadmap.tsx
    │   ├── Services.tsx
    │   ├── SuccessStories.tsx
    │   ├── Team.tsx
    │   ├── Testimonials.tsx
    │   ├── theme-provider.tsx
    │   ├── ThemeProvider.tsx
    │   ├── ThemeToggle.tsx
    │   ├── WhyChooseUs.tsx
    │   └── ui/
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── Button.tsx
    │       ├── calendar.tsx
    │       ├── Card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── Input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── Select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── Textarea.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       ├── tooltip.tsx
    │       ├── use-mobile.tsx
    │       └── use-toast.ts
    ├── hooks/
    │   ├── use-mobile.tsx
    │   ├── use-toast.ts
    │   └── useScrollAnimation.ts
    ├── lib/
    │   ├── products.ts
    │   └── utils.ts
    ├── public/
    │   └── image/
    ├── styles/
    │   └── globals.css
    └── tpr_mics/


================================================
FILE: components.json
================================================
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}


================================================
FILE: next.config.mjs
================================================
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig



================================================
FILE: package.json
================================================
{
  "name": "my-v0-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "next lint",
    "start": "next start"
  },
  "dependencies": {
    "@emotion/is-prop-valid": "latest",
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "8.5.1",
    "framer-motion": "latest",
    "input-otp": "1.4.1",
    "lucide-react": "^0.454.0",
    "next": "14.2.16",
    "next-themes": "^0.4.4",
    "react": "^18",
    "react-day-picker": "8.10.1",
    "react-dom": "^18",
    "react-hook-form": "^7.54.1",
    "react-hot-toast": "^2.5.2",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "shadcn": "latest",
    "sonner": "^1.7.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.6",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8.5",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}



================================================
FILE: pnpm-lock.yaml
================================================
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false


================================================
FILE: postcss.config.mjs
================================================
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;



================================================
FILE: tailwind.config.ts
================================================
import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.3)",
        "glow-purple": "0 0 20px rgba(147, 51, 234, 0.3)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s infinite",
        float: "float 6s ease-in-out infinite",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [animate],
}

export default config




================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}



================================================
FILE: app/globals.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply antialiased font-sans;
  }

  * {
    @apply border-gray-200 dark:border-gray-700;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold tracking-tight;
  }

  p {
    @apply leading-relaxed;
  }

  /* Hide elements initially for animations */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
  }

  .animate-on-scroll.animate {
    animation: fadeInUp 0.8s ease-out forwards;
  }
}

@layer components {
  /* Button Components */
  .btn {
    @apply inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn:hover {
    @apply scale-105;
  }

  .btn:active {
    @apply scale-95;
  }

  .btn-primary {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg;
  }

  .btn-primary:hover {
    @apply shadow-xl shadow-glow-blue from-blue-700 to-purple-700;
  }

  .btn-primary:focus {
    @apply ring-blue-500;
  }

  .btn-secondary {
    @apply bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white;
  }

  .btn-secondary:hover {
    @apply bg-gray-200 dark:bg-gray-600;
  }

  .btn-outline {
    @apply border-2 border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300;
  }

  .btn-outline:hover {
    @apply border-gray-400 bg-gray-50 dark:border-gray-500 dark:bg-gray-800;
  }

  .btn-sm {
    @apply px-4 py-2 text-sm;
  }

  .btn-md {
    @apply px-6 py-3 text-base;
  }

  .btn-lg {
    @apply px-8 py-4 text-lg;
  }

  /* Card Components */
  .card {
    @apply bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300;
  }

  .card:hover {
    @apply shadow-xl dark:shadow-2xl -translate-y-1 scale-[1.02];
  }

  .card-content {
    @apply p-6;
  }

  /* Input Components */
  .input {
    @apply w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300;
  }

  .input:focus {
    @apply border-blue-500 dark:border-blue-400 outline-none ring-2 ring-blue-500/20 scale-[1.02];
  }

  .textarea {
    @apply input resize-none;
  }

  .select {
    @apply input;
  }

  /* Badge Components */
  .badge {
    @apply inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300;
  }

  .badge:hover {
    @apply scale-105;
  }

  .badge-default {
    @apply bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200;
  }

  .badge-primary {
    @apply bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200;
  }

  /* Utility Classes */
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }

  .floating-element {
    animation: float 6s ease-in-out infinite;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
  }

  .dark .text-gradient {
    @apply bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent;
  }
}

@layer utilities {
  .shadow-glow-blue {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }

  .shadow-glow-green {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
  }

  .shadow-glow-purple {
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-gray-100 dark:bg-gray-800;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-gradient-to-b from-blue-500 to-purple-500 rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply from-blue-600 to-purple-600;
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    @apply outline-2 outline-blue-500 outline-offset-2;
  }

  .dark button:focus-visible,
  .dark input:focus-visible,
  .dark textarea:focus-visible,
  .dark select:focus-visible {
    @apply outline-blue-400;
  }
}

/* Intersection Observer Animation Trigger */
@media (prefers-reduced-motion: no-preference) {
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .animate-on-scroll.animate {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}



================================================
FILE: app/layout.tsx
================================================
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechSolutions - Professional IT Services & Web Development",
  description:
    "Transform your business with our comprehensive IT services including web development, mobile apps, SEO, AI R&D, and software solutions.",
  keywords: "web development, mobile apps, SEO, AI development, software solutions, IT services",
  authors: [{ name: "TechSolutions Team" }],
  openGraph: {
    title: "TechSolutions - Professional IT Services",
    description: "Leading IT services company specializing in web development, mobile applications, and AI solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSolutions - Professional IT Services",
    description: "Transform your business with cutting-edge technology solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}



================================================
FILE: app/page.tsx
================================================
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import IdeaConceptSolution from "@/components/IdeaConceptSolution"
import WhyChooseUs from "@/components/WhyChooseUs"
import Services from "@/components/Services"
import Integration from "@/components/Integration"
import Partners from "@/components/Partners"
import Roadmap from "@/components/Roadmap"
import Team from "@/components/Team"
import BusinessCall from "@/components/BusinessCall"
import Testimonials from "@/components/Testimonials"
import CustomerReviews from "@/components/CustomerReviews"
import SuccessStories from "@/components/SuccessStories"
import QuickSupport from "@/components/QuickSupport"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <Hero />
      <IdeaConceptSolution />
      <WhyChooseUs />
      <Services />
      <Integration />
      <Partners />
      <Roadmap />
      <Team />
      <BusinessCall />
      <Testimonials />
      <CustomerReviews />
      <SuccessStories />
      <QuickSupport />
      <Footer />
    </main>
  )
}



================================================
FILE: app/about/careers/page.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Shield, Coffee } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and career development programs",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries, equity options, and performance bonuses",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with talented, passionate people in a collaborative environment",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Free meals, snacks, gym membership, and team building activities",
      color: "from-orange-500 to-red-500",
    },
  ]

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Join our core development team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Strong understanding of database design and optimization",
      ],
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Lead the development of machine learning models and AI solutions for our clients across various industries.",
      requirements: [
        "3+ years of ML/AI development experience",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Experience with MLOps and model deployment",
        "Strong mathematical and statistical background",
      ],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Los Angeles, CA / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Create beautiful, intuitive user experiences for web and mobile applications that delight our clients' users.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, and design systems",
        "Strong portfolio demonstrating user-centered design",
        "Experience with user research and testing",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Austin, TX / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Build and maintain scalable infrastructure and deployment pipelines for our applications and client projects.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Expertise in Docker, Kubernetes, and CI/CD",
        "Experience with cloud platforms and infrastructure as code",
        "Strong scripting and automation skills",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Chicago, IL / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive growth through SEO, content marketing, and digital advertising campaigns for our clients.",
      requirements: [
        "3+ years of digital marketing experience",
        "Expertise in SEO, SEM, and social media marketing",
        "Experience with analytics tools and data-driven optimization",
        "Strong content creation and copywriting skills",
      ],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead cross-functional teams to deliver exceptional results for our clients while ensuring projects stay on time and budget.",
      requirements: [
        "5+ years of project management experience",
        "PMP or Agile certification preferred",
        "Experience managing technical projects",
        "Excellent communication and leadership skills",
      ],
    },
  ]

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and embrace new technologies to stay ahead of the curve.",
      icon: "🚀",
    },
    {
      title: "Collaborative Spirit",
      description: "We believe the best solutions come from diverse perspectives working together.",
      icon: "🤝",
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, conferences, and skill development.",
      icon: "📚",
    },
    {
      title: "Work-Life Balance",
      description: "We support flexible work arrangements and prioritize mental health and well-being.",
      icon: "⚖️",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Build the future of technology with us. We're looking for passionate individuals who want to make a real
              impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, and making a real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values and principles that make TechSolutions a great place to work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and join our growing team
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Shield className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 mt-4 lg:mt-0"
                    >
                      Apply Now
                    </motion.button>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't see a position that fits? We're always interested in hearing from talented individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Send Your Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: app/about/our-story/page.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Award, Target, Lightbulb, Rocket } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function OurStoryPage() {
  const milestones = [
    {
      year: "2014",
      title: "The Beginning",
      description: "Founded with a vision to transform businesses through technology",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2016",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a game-changing solution",
      icon: Target,
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2018",
      title: "Team Expansion",
      description: "Grew to 25+ talented professionals across multiple disciplines",
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2020",
      title: "AI Innovation",
      description: "Launched our AI R&D division and pioneered machine learning solutions",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won multiple awards for excellence in web development and innovation",
      icon: Award,
      color: "from-red-500 to-orange-500",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving 500+ clients across 30+ countries with cutting-edge solutions",
      icon: Calendar,
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client service.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients as partners.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices at all times.",
      icon: "🛡️",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From a small startup to a leading IT services company, our journey has been driven by passion, innovation,
              and an unwavering commitment to transforming businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses of all sizes with innovative technology solutions that drive growth, efficiency,
                and competitive advantage in the digital age.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology should be accessible, powerful, and transformative. Our mission is to bridge
                the gap between complex technical possibilities and real business outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the world's most trusted partner for digital transformation, recognized for our innovation,
                expertise, and commitment to client success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every business, regardless of size or industry, can harness the full
                potential of technology to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of growth, innovation, and success stories
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < milestones.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300" />}

                {/* Year Badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                  {milestone.year.slice(-2)}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center mr-4`}
                    >
                      <milestone.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      <p className="text-blue-600 font-semibold">{milestone.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="text-6xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Our achievements speak for themselves</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years of Excellence" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "30+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: app/about/our-team/page.tsx
================================================
'use client';

import { useState } from 'react';
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Link as LinkIcon,
    Figma,
    X,
    Sparkles,
    Users,
    Award,
    Target,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Shwetank from '../../../public/image/shwetank.jpg';
import Avnish from '../../../public/image/avnish.jpg';
import Shaqib from '../../../public/image/shaqib.jpg';
import Hifzur from '../../../public/image/hifzur.jpg';
import Ashok from '../../../public/image/ashok.jpg';
import Avinash from '../../../public/image/avinash.jpg';
import Gaurav from '../../../public/image/gaurav.jpg';

export default function OurTeamPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        department: '',
        coverLetter: '',
        cv: null as File | null,
        agree: false,
    });

    const departmentOptions = [
        'Human Resources',
        'Frontend Development',
        'Backend Development',
        'UI/UX Design',
        'Marketing',
        'Project Management',
    ];

    // Mock team images - replace with actual image paths

    const leadership = [
        {
            name: 'Shwetank Dhar Dwiedi',
            role: 'CEO & Founder (Backend Specialist)',
            image: Shwetank,
            bio: 'Shwetank is a backend expert with over 15 years of experience, leading strategic growth and building scalable platforms that empower businesses through high-performance, secure, and reliable digital solutions worldwide.',
            expertise: [
                'Next JS',
                'Strapi',
                'React JS',
                'PHP',
                'CodeIgniter',
                'Laravel',
            ],
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'shwetank@techsolutions.com',
            },
        },
        {
            name: 'Avnish Kumar',
            role: 'Full Stack Developer',
            image: Avnish,
            bio: 'Avnish is a skilled full-stack developer who creates responsive web and mobile applications using modern frontend and backend technologies, focusing on performance, user experience, and scalable architecture design.',
            expertise: [
                'Next.js',
                'Strapi',
                'React JS',
                'Node.js',
                'React Native',
            ],
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'avnish@techsolutions.com',
            },
        },
        {
            name: 'Shaqib Raja',
            role: 'MERN Stack Developer',
            image: Shaqib,
            bio: 'Shaqib combines UI/UX design with advanced development skills, delivering creative and functional user experiences through a deep understanding of both front-end aesthetics and backend technology integration and systems.',
            expertise: [
                'Laravel',
                'PHP',
                'Strapi',
                'React',
                'React Native',
                'Next.js',
                'Angular',
                'MySQL',
                'MongoDB',
            ],
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'shaqib@techsolutions.com',
            },
        },
    ];

    const departments = [
        {
            name: 'Development Team',
            description: 'Expert developers building cutting-edge solutions',
            icon: <Target className="w-8 h-8" />,
            color: 'from-blue-500 to-cyan-500',
            members: [
                {
                    name: 'Hifzur Rahman',
                    role: 'Frontend Developer',
                    image: Hifzur,
                    bio: 'Crafting pixel-perfect web interfaces by blending creativity with code. With a strong grasp of frontend technologies and UI tools, transforms ideas into responsive, engaging digital experiences.',
                    expertise: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'jQuery',
                        'Bootstrap',
                        'Tailwind',
                        'Figma',
                        'Photoshop',
                        'Canva',
                        'React JS',
                        'Next JS',
                        'PHP',
                        'MySQL',
                    ],
                    social: {
                        linkedin:
                            'https://www.linkedin.com/in/hifzur-rahman-05b149169/',
                        github: 'https://github.com/hifzur001',
                        figma: 'https://www.figma.com/@hifzurrahman',
                        email: 'hrrahman47@outlook.com',
                        portfolio:
                            'https://portfolio-zeta-hazel-12.vercel.app/',
                    },
                },
                {
                    name: 'Ashok Tiwari',
                    role: 'SEO Specialist | UI/UX',
                    image: Ashok,
                    bio: 'Optimizes websites for search engines while enhancing user experience through modern UI/UX principles. Blends analytical SEO strategies with intuitive design to drive engagement and performance.',
                    expertise: [
                        'SEO',
                        'Google Analytics',
                        'UI/UX Design',
                        'Figma',
                        'HTML',
                        'CSS',
                        'On-Page Optimization',
                        'Content Strategy',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'ashok@techsolutions.com',
                    },
                },
                {
                    name: 'Avnish Kumar',
                    role: 'Full Stack Developer',
                    image: Avnish,
                    bio: 'Builds responsive web and mobile applications using modern frontend and backend technologies. Focuses on performance, user experience, and scalable architecture design.',
                    expertise: [
                        'Next.js',
                        'React JS',
                        'React Native',
                        'Strapi',
                        'MongoDB',
                        'MySQL',
                        'JavaScript',
                        'TypeScript',
                        'Tailwind CSS',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        github: '#',
                        email: 'avnish@techsolutions.com',
                    },
                },
                {
                    name: 'Shaqib Raja',
                    role: 'MERN Stack Developer',
                    image: Shaqib,
                    bio: 'Delivers creative and functional user experiences through strong UI/UX design and full-stack development. Specializes in front-end aesthetics and backend systems integration.',
                    expertise: [
                        'Laravel',
                        'PHP',
                        'Strapi',
                        'React',
                        'React Native',
                        'Next.js',
                        'Angular',
                        'MySQL',
                        'MongoDB',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'shaqib@techsolutions.com',
                    },
                },
            ],
        },
        {
            name: 'Human Resources & Finance',
            description:
                'Supporting our team with strategic HR and financial management',
            icon: <Users className="w-8 h-8" />,
            color: 'from-purple-500 to-pink-500',
            members: [
                {
                    name: 'Gaurav Rai',
                    role: 'Human Resources & Recruitment',
                    image: Gaurav,
                    bio: 'A strategic HR professional with expertise in talent acquisition, employee engagement, and building efficient onboarding frameworks.',
                    expertise: [
                        'Talent Acquisition',
                        'Employee Engagement',
                        'HR Strategy',
                        'Onboarding Processes',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'gaurav@techsolutions.com',
                    },
                },
                {
                    name: 'Avinash Kumar',
                    role: 'Finance & Accounting',
                    image: Avinash,
                    bio: 'A detail-oriented finance specialist skilled in budgeting, taxation, financial planning, reporting, and managing corporate accounts effectively.',
                    expertise: [
                        'Financial Planning',
                        'Budgeting',
                        'Taxation',
                        'Corporate Accounting',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'avinash@techsolutions.com',
                    },
                },
            ],
        },
    ];

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: target.checked,
            }));
        } else if (type === 'file') {
            const files = target.files;
            setFormData(prev => ({
                ...prev,
                [name]: files ? files[0] : null,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, mobile, location, department, cv, agree } =
            formData;

        // Improved validation
        if (!name.trim()) {
            alert('Please enter your name.');
            return;
        }
        if (!email.trim()) {
            alert('Please enter your email.');
            return;
        }
        if (!mobile.trim()) {
            alert('Please enter your mobile number.');
            return;
        }
        if (!location.trim()) {
            alert('Please enter your location.');
            return;
        }
        if (!department) {
            alert('Please select a department.');
            return;
        }
        if (!cv) {
            alert('Please upload your CV/Resume.');
            return;
        }
        if (!agree) {
            alert('Please agree to the terms and privacy policy.');
            return;
        }

        // Success message
        alert('Application submitted successfully!');
        setIsModalOpen(false);
        setFormData({
            name: '',
            email: '',
            mobile: '',
            location: '',
            department: '',
            coverLetter: '',
            cv: null,
            agree: false,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <Header />

            {/* Hero Section with Floating Elements */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-8">
                            <Sparkles className="w-5 h-5 text-blue-600" />
                            <span className="text-blue-800 font-semibold">
                                Meet Our Amazing Team
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-8">
                            Exceptional
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Talent
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            Meet the passionate professionals who turn
                            innovative ideas into
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                                {' '}
                                exceptional digital experiences
                            </span>
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                    15+
                                </div>
                                <div className="text-gray-600 font-medium">
                                    Years Experience
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                    50+
                                </div>
                                <div className="text-gray-600 font-medium">
                                    Projects Delivered
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                    100%
                                </div>
                                <div className="text-gray-600 font-medium">
                                    Client Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-6">
                            <Award className="w-5 h-5 text-amber-600" />
                            <span className="text-amber-800 font-semibold">
                                Leadership Excellence
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Visionary
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                {' '}
                                Leaders
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experienced leaders guiding our vision with
                            innovation and strategic excellence
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {leadership.map((leader, index) => (
                            <div key={index} className="group relative">
                                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50 transform group-hover:-translate-y-2">
                                    {/* Gradient Border Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                                    <div className="relative mb-8 group-hover:scale-105 transition-transform duration-500">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                            <Image
                                                src={leader.image}
                                                alt={leader.name}
                                                width={400}
                                                height={400}
                                                className="w-56 h-56 rounded-2xl mx-auto object-cover relative z-10 ring-4 ring-white group-hover:ring-blue-200 transition-all duration-500"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-900 transition-colors duration-300">
                                        {leader.name}
                                    </h3>
                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-6 text-center">
                                        {leader.role}
                                    </p>
                                    <p className="text-gray-600 text-center mb-8 leading-relaxed">
                                        {leader.bio}
                                    </p>

                                    {/* Expertise */}
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-4 text-center">
                                            Expertise
                                        </h4>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {leader.expertise.map(
                                                (skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default"
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-4">
                                        {leader.social.linkedin && (
                                            <a
                                                href={leader.social.linkedin}
                                                className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-600 hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {leader.social.twitter && (
                                            <a
                                                href={leader.social.twitter}
                                                className="w-12 h-12 bg-gradient-to-r from-sky-100 to-sky-200 rounded-full flex items-center justify-center text-sky-600 hover:from-sky-500 hover:to-sky-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                            >
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {leader.social.github && (
                                            <a
                                                href={leader.social.github}
                                                className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        <a
                                            href={`mailto:${leader.social.email}`}
                                            className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-600 hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Teams */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                {' '}
                                Departments
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Specialized teams working in perfect harmony to
                            deliver extraordinary results
                        </p>
                    </div>

                    <div className="space-y-24">
                        {departments.map((department, deptIndex) => (
                            <div key={deptIndex}>
                                <div className="text-center mb-16">
                                    <div
                                        className={`inline-flex items-center gap-3 bg-gradient-to-r ${department.color} p-4 rounded-2xl mb-6 text-white shadow-lg`}
                                    >
                                        {department.icon}
                                        <h3 className="text-2xl font-bold">
                                            {department.name}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                        {department.description}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {department.members.map(
                                        (member, memberIndex) => (
                                            <div
                                                key={memberIndex}
                                                className="group relative"
                                            >
                                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent transform group-hover:-translate-y-2 relative overflow-hidden">
                                                    {/* Animated Background */}
                                                    <div
                                                        className={`absolute inset-0 bg-gradient-to-br ${department.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                                    ></div>

                                                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                                                        <div className="relative">
                                                            <div
                                                                className={`absolute inset-0 bg-gradient-to-r ${department.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                                            ></div>
                                                            <Image
                                                                src={
                                                                    member.image
                                                                }
                                                                alt={
                                                                    member.name
                                                                }
                                                                width={300}
                                                                height={300}
                                                                className="w-28 h-28 rounded-full mx-auto object-cover relative z-10 ring-4 ring-white group-hover:ring-blue-200 transition-all duration-500"
                                                            />
                                                        </div>
                                                    </div>

                                                    <h4 className="text-lg font-bold text-gray-900 mb-1 text-center group-hover:text-blue-900 transition-colors duration-300">
                                                        {member.name}
                                                    </h4>
                                                    <p
                                                        className={`text-transparent bg-clip-text bg-gradient-to-r ${department.color} font-semibold mb-3 text-center text-sm`}
                                                    >
                                                        {member.role}
                                                    </p>

                                                    {member.bio && (
                                                        <p className="text-gray-600 text-center text-sm mb-4 leading-relaxed">
                                                            {member.bio}
                                                        </p>
                                                    )}

                                                    {/* Expertise */}
                                                    {member.expertise && (
                                                        <div className="flex flex-wrap gap-1 justify-center mb-6">
                                                            {member.expertise
                                                                .slice(0, 6)
                                                                .map(
                                                                    (
                                                                        skill,
                                                                        skillIndex
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                skillIndex
                                                                            }
                                                                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-300 cursor-default"
                                                                        >
                                                                            {
                                                                                skill
                                                                            }
                                                                        </span>
                                                                    )
                                                                )}
                                                            {member.expertise
                                                                .length > 6 && (
                                                                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium">
                                                                    +
                                                                    {member
                                                                        .expertise
                                                                        .length -
                                                                        6}{' '}
                                                                    more
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Social Icons */}
                                                    {member.social && (
                                                        <div className="flex justify-center space-x-3">
                                                            {member.social
                                                                .linkedin && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .linkedin
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-600 hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Linkedin className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .github && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .github
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Github className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .email && (
                                                                <a
                                                                    href={`mailto:${member.social.email}`}
                                                                    className="w-10 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-600 hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Mail className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .figma && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .figma
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:from-pink-500 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Figma className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .portfolio && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .portfolio
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center text-purple-600 hover:from-purple-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <LinkIcon className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team CTA */}
            <section className="py-24 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>

                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                            <Sparkles className="w-5 h-5 text-white" />
                            <span className="text-white font-semibold">
                                Join Our Journey
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                            Ready to Make an
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                                Impact?
                            </span>
                        </h2>

                        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            We're always looking for passionate individuals who
                            share our vision for innovation and excellence. Join
                            our team and help shape the future of technology.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Sparkles className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">
                                Explore Opportunities
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Animated Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 overflow-y-auto">
                    <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl mt-10 mb-10">
                        {/* Modal Header */}
                        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white rounded-t-3xl">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-90"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Join Our Team
                                    </h3>
                                    <p className="text-blue-100">
                                        Start your journey with us
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 max-h-[80vh] overflow-y-auto">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Mobile Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            placeholder="+1 (555) 123-4567"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Location *
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder="City, Country"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">
                                        Department *
                                    </label>
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:outline-none transition-colors"
                                        required
                                    >
                                        <option value="">
                                            Select your preferred department
                                        </option>
                                        {departmentOptions.map(dept => (
                                            <option key={dept} value={dept}>
                                                {dept}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">
                                        Resume/CV *
                                    </label>
                                    <input
                                        type="file"
                                        name="cv"
                                        onChange={handleInputChange}
                                        accept=".pdf,.doc,.docx"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors file:bg-blue-50 file:text-blue-700 file:border-0 file:px-4 file:py-2 file:rounded-lg file:mr-4"
                                        required
                                    />
                                    <p className="text-xs text-gray-500">
                                        Please upload your CV in PDF, DOC, or
                                        DOCX format
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        checked={formData.agree}
                                        onChange={handleInputChange}
                                        className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        required
                                    />
                                    <label className="text-sm text-gray-600 leading-relaxed">
                                        I agree to the{' '}
                                        <span className="text-blue-600 font-semibold text-decoration-none cursor-pointer hover:text-blue-800">
                                            Terms and Conditions
                                        </span>{' '}
                                        and{' '}
                                        <span className="text-blue-600 font-semibold text-decoration-none cursor-pointer hover:text-blue-800">
                                            Privacy Policy
                                        </span>
                                        .
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Submit Application
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}



================================================
FILE: app/contact/page.tsx
================================================
"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"
import Select from "@/components/ui/Select"
import Button from "@/components/ui/Button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We're here to help you with your next project. Reach out to us through any of the methods below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Contact Details</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with us directly for inquiries, support, or to start a new project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Phone Number",
                value: "+91-9355-27-3535",
                link: "tel:+919355273535",
                description: "Call us anytime for immediate assistance.",
              },
              {
                icon: Mail,
                title: "Email Address",
                value: "support@topagerankers.com",
                link: "mailto:support@topagerankers.com",
                description: "Send us an email and we'll respond within 24 hours.",
              },
              {
                icon: MapPin,
                title: "Our Location",
                value: "India",
                link: "https://maps.app.goo.gl/your-location-link", // Replace with actual map link
                description: "Our main office is located in India.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <a
                    href={item.link}
                    className="text-blue-600 dark:text-blue-400 text-lg font-semibold hover:underline transition-colors duration-300"
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                  >
                    {item.value}
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-600 transition-colors duration-300"
          >
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (234) 567-8900"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Service Needed
                </label>
                <Select
                  id="service"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="seo-services">SEO Services</option>
                  <option value="cloud-infrastructure">Cloud Infrastructure</option>
                  <option value="cybersecurity-solutions">Cybersecurity Solutions</option>
                  <option value="it-consulting">IT Consulting</option>
                  <option value="custom-software-development">Custom Software Development</option>
                  <option value="other">Other</option>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="md:col-span-2 text-center">
                <Button variant="primary" size="lg" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Hours / Quick Support */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Quick Support?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Our team is available to assist you with any urgent queries.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-white/20 dark:border-white/10"
              >
                <Clock className="w-12 h-12 text-blue-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
                <p className="text-lg text-gray-300">Monday - Friday: 9 AM - 6 PM (IST)</p>
                <p className="text-lg text-gray-300">Saturday: 10 AM - 2 PM (IST)</p>
                <p className="text-lg text-gray-300">Sunday: Closed</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-white/20 dark:border-white/10"
              >
                <MessageCircle className="w-12 h-12 text-purple-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
                <p className="text-lg text-gray-300 mb-4">Chat with our support team instantly.</p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => alert("Live Chat functionality would be integrated here!")}
                >
                  Start Live Chat
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: app/portfolio/page.tsx
================================================
"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Code, Smartphone, Search, Brain, Cloud, Shield } from "lucide-react"
import { products as allProducts } from "@/lib/products" // Import products data

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description:
        "A modern, responsive e-commerce website built for a retail client, focusing on user experience and conversion.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Development",
      client: "Retail Innovations Inc.",
      challenge: "Outdated UI/UX, slow performance, and poor mobile responsiveness.",
      solution:
        "Complete redesign with Next.js, Tailwind CSS, and optimized image loading. Integrated a new payment gateway and inventory system.",
      results: ["+150% Website Traffic", "+80% Mobile Conversions", "+60% Sales Revenue"],
      icon: Code,
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "A secure and intuitive mobile application for patient management and appointment booking.",
      image: "/placeholder.svg?height=600&width=800",
      category: "App Development",
      client: "MediCare Solutions",
      challenge: "Lack of a centralized platform for patients to manage appointments and access health records.",
      solution:
        "Developed a cross-platform mobile app using React Native with secure data encryption and HIPAA compliance.",
      results: ["+200% Patient Engagement", "+120% Appointment Bookings", "4.8/5 App Store Rating"],
      icon: Smartphone,
    },
    {
      id: 3,
      title: "AI-Powered Chatbot for Customer Support",
      description: "An intelligent chatbot integrated into a client's website to provide 24/7 customer assistance.",
      image: "/placeholder.svg?height=600&width=800",
      category: "AI R&D",
      client: "Global Tech Support",
      challenge: "High volume of customer inquiries overwhelming human support agents.",
      solution:
        "Implemented a custom AI chatbot using natural language processing (NLP) to handle common queries and escalate complex issues.",
      results: ["-70% Support Tickets", "+40% Customer Satisfaction", "24/7 Availability"],
      icon: Brain,
    },
    {
      id: 4,
      title: "Local SEO Domination for Restaurants",
      description:
        "Helped a chain of local restaurants achieve top rankings in Google My Business and local search results.",
      image: "/placeholder.svg?height=600&width=800",
      category: "SEO Services",
      client: "Gourmet Bites Group",
      challenge: "Low online visibility in local search, leading to fewer walk-ins and online orders.",
      solution:
        "Comprehensive local SEO strategy including GMB optimization, local citation building, and review management.",
      results: ["Top 3 Local Ranking", "+250% Foot Traffic", "+180% Online Orders"],
      icon: Search,
    },
    {
      id: 5,
      title: "Cloud Migration & Optimization",
      description:
        "Migrated a large enterprise's on-premise infrastructure to AWS, improving scalability and reducing costs.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Cloud Infrastructure",
      client: "Enterprise Solutions Co.",
      challenge: "High operational costs and limited scalability with existing on-premise servers.",
      solution:
        "Planned and executed a phased migration to AWS, optimizing resource allocation and implementing serverless architectures.",
      results: ["-40% Infrastructure Costs", "+99.99% Uptime", "Enhanced Scalability"],
      icon: Cloud,
    },
    {
      id: 6,
      title: "Cybersecurity Audit & Implementation",
      description:
        "Conducted a full security audit and implemented robust cybersecurity measures for a financial institution.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Cybersecurity Solutions",
      client: "SecureBank Financial",
      challenge: "Vulnerabilities in existing systems and compliance requirements.",
      solution:
        "Performed penetration testing, implemented advanced threat detection systems, and conducted employee security training.",
      results: ["0 Security Breaches", "100% Compliance Achieved", "Improved Data Protection"],
      icon: Shield,
    },
    {
      id: 7,
      title: "Custom CRM Development",
      description:
        "Built a tailored Customer Relationship Management system to streamline sales and marketing processes.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Custom Software Development",
      client: "SalesPro CRM",
      challenge: "Off-the-shelf CRM solutions did not meet unique business workflows.",
      solution:
        "Designed and developed a custom CRM with integrated lead tracking, sales automation, and reporting features.",
      results: ["+30% Sales Efficiency", "+20% Lead Conversion", "Streamlined Workflows"],
      icon: Code,
    },
    {
      id: 8,
      title: "Mobile Game Development",
      description: "Developed an engaging casual mobile game for iOS and Android with in-app purchases.",
      image: "/placeholder.svg?height=600&width=800",
      category: "App Development",
      client: "PlayTime Studios",
      challenge: "Need for a high-performance, addictive mobile game to capture market share.",
      solution:
        "Used Unity for cross-platform development, focusing on smooth animations, intuitive controls, and engaging gameplay loops.",
      results: ["1M+ Downloads", "4.5/5 User Rating", "+50% Retention Rate"],
      icon: Smartphone,
    },
  ]

  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))]

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Products Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover our innovative software products designed to streamline your business operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allProducts.map((product, index) => (
              <Link href={`/portfolio/products/${product.slug}`} key={product.id} passHref>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group cursor-pointer"
                >
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                    <Image
                      src={product.mainImage || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white text-lg font-bold">{product.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3"
                    >
                      <product.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Software Product</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{product.shortDescription}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero Section (Existing Portfolio Hero) */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our diverse range of successful projects and see how we've helped businesses achieve their digital
              goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-lg font-bold">{item.title}</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3"
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.category}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Client: {item.client}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{item.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {item.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-gray-600 dark:text-gray-400 text-xl mt-16"
            >
              No projects found for this category.
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your vision and turn it into a success story.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 dark:text-blue-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: app/portfolio/products/[slug]/page.tsx
================================================
import type { Metadata } from "next"
import ProductDetailPageClient from "./ProductDetailPageClient"
import { products } from "@/lib/products" // Import products data

// Function to generate static params for all product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Function to generate metadata for each product page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailPageClient params={params} />
}



================================================
FILE: app/portfolio/products/[slug]/ProductDetailPageClient.tsx
================================================
"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { products } from "@/lib/products" // Import products data

export default function ProductDetailPageClient({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  const [currentImage, setCurrentImage] = useState(product?.mainImage || "/placeholder.svg")

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center py-20">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Product Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We could not find the product you are looking for. Please check the URL or return to our{" "}
            <Link href="/portfolio" className="text-blue-600 hover:underline">
              portfolio page
            </Link>
            .
          </p>
        </motion.div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section for Product */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">{product.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{product.detailedDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Image Gallery */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative w-full h-[400px] md:h-[600px] mb-4">
              <Image
                src={currentImage || "/placeholder.svg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="object-center rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {[product.mainImage, ...product.galleryImages].map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative h-24 w-full rounded-lg overflow-hidden cursor-pointer border-2 ${
                    currentImage === img ? "border-blue-600 dark:border-blue-400" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImage(img)}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Key Features</h2>
              <ul className="space-y-4">
                {(product.features ?? []).map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Benefits for Your Business</h2>
              <ul className="space-y-4">
                {(product.benefits ?? []).map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pricing Plans</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(product.pricing).map(([tier, details], index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 capitalize">{tier}</h3>
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">{details.price}</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Implement {product.name}?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how this product can transform your business.
            </p>
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 dark:text-blue-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get a Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: app/services/ai-r-d/page.tsx
================================================
"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function AIRDPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              AI Research & Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Coming Soon - Cutting-edge AI solutions and machine learning implementations for your business.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}



================================================
FILE: app/services/amazon-ads/page.tsx
================================================
"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function AmazonAdsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Amazon Ads Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Coming Soon - Professional Amazon advertising services to boost your product visibility and sales.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}



================================================
FILE: app/services/crm-solutions/page.tsx
================================================
"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function CRMSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              CRM Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Coming Soon - Custom CRM solutions to streamline your customer relationships and boost sales.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}



================================================
FILE: app/services/google-my-business/page.tsx
================================================
"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function GoogleMyBusinessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Google My Business
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Coming Soon - Professional Google My Business optimization to dominate local search results.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}



================================================
FILE: app/services/mobile-development/page.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Smartphone, Tablet, Monitor, Zap, Shield, Users, CheckCircle, ArrowRight, Apple, Play } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function AppDevelopmentPage() {
  const features = [
    {
      icon: Smartphone,
      title: "Native iOS & Android",
      description: "Platform-specific apps that leverage native features for optimal performance",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description: "React Native and Flutter solutions for faster development and deployment",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized code and efficient architecture for lightning-fast app performance",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data encryption and secure authentication",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for exceptional user experience and engagement",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Tablet,
      title: "Multi-Device Support",
      description: "Responsive design that works perfectly across phones, tablets, and devices",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Shopping apps with payment integration, inventory management, and user accounts",
      icon: "🛒",
      examples: ["Online stores", "Marketplace apps", "B2B platforms"],
    },
    {
      title: "Social & Communication",
      description: "Social networking, messaging, and community-building applications",
      icon: "💬",
      examples: ["Chat apps", "Social networks", "Community platforms"],
    },
    {
      title: "Business & Productivity",
      description: "Enterprise solutions for workflow management and business operations",
      icon: "💼",
      examples: ["CRM systems", "Project management", "Team collaboration"],
    },
    {
      title: "Healthcare & Fitness",
      description: "Health monitoring, fitness tracking, and medical consultation apps",
      icon: "🏥",
      examples: ["Fitness trackers", "Telemedicine", "Health monitoring"],
    },
    {
      title: "Education & Learning",
      description: "E-learning platforms, course management, and educational tools",
      icon: "📚",
      examples: ["Online courses", "Language learning", "Skill development"],
    },
    {
      title: "Entertainment & Media",
      description: "Streaming, gaming, and multimedia content delivery applications",
      icon: "🎮",
      examples: ["Video streaming", "Music apps", "Gaming platforms"],
    },
  ]

  const technologies = [
    { name: "React Native", logo: "/placeholder.svg?height=60&width=60", category: "Cross-Platform" },
    { name: "Flutter", logo: "/placeholder.svg?height=60&width=60", category: "Cross-Platform" },
    { name: "Swift", logo: "/placeholder.svg?height=60&width=60", category: "iOS Native" },
    { name: "Kotlin", logo: "/placeholder.svg?height=60&width=60", category: "Android Native" },
    { name: "Firebase", logo: "/placeholder.svg?height=60&width=60", category: "Backend" },
    { name: "AWS", logo: "/placeholder.svg?height=60&width=60", category: "Cloud" },
    { name: "Node.js", logo: "/placeholder.svg?height=60&width=60", category: "Backend" },
    { name: "MongoDB", logo: "/placeholder.svg?height=60&width=60", category: "Database" },
  ]

  const packages = [
    {
      name: "MVP App",
      price: "$15,000",
      description: "Perfect for startups and proof of concept",
      features: [
        "Single platform (iOS or Android)",
        "Basic UI/UX design",
        "Core functionality",
        "User authentication",
        "Basic backend integration",
        "3 months support",
        "App store submission",
      ],
      popular: false,
    },
    {
      name: "Professional App",
      price: "$35,000",
      description: "Full-featured app for growing businesses",
      features: [
        "Cross-platform (iOS & Android)",
        "Custom UI/UX design",
        "Advanced features",
        "Push notifications",
        "Analytics integration",
        "Payment gateway",
        "6 months support",
        "Performance optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise App",
      price: "Custom",
      description: "Complex solutions for large organizations",
      features: [
        "Multi-platform deployment",
        "Enterprise-grade security",
        "Custom integrations",
        "Advanced analytics",
        "Scalable architecture",
        "Admin dashboard",
        "12 months support",
        "Dedicated team",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Mobile App{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your ideas into powerful mobile applications. We create native and cross-platform apps that
                engage users, drive growth, and deliver exceptional experiences across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Start Your App
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  View Portfolio
                </motion.button>
              </div>

              {/* App Store Badges */}
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
                >
                  <Apple className="w-6 h-6" />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
                >
                  <Play className="w-6 h-6" />
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Phone Mockups */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute left-0 top-0 w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Smartphone className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-semibold">iOS App</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute right-0 top-8 w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Monitor className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-semibold">Android App</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">App Development Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app development services that cover every aspect of your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Types of Apps We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple utilities to complex enterprise solutions, we build apps for every industry and use case
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  <div className="text-6xl mb-6 text-center">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">{type.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          <span className="text-gray-600 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technologies & Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">App Development Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your mobile app development needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative group ${pkg.popular ? "lg:-mt-8" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    pkg.popular
                      ? "border-purple-200 group-hover:border-purple-300"
                      : "border-gray-100 group-hover:border-gray-200"
                  }`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                    {pkg.price !== "Custom" && <p className="text-gray-500">Starting price</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your App?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's turn your app idea into reality. Our expert team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your App Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: app/services/seo-services/page.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, Target, BarChart, Globe, Users, CheckCircle, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function SEOServicesPage() {
  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "In-depth analysis to identify high-value keywords that drive qualified traffic",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description: "Complete optimization of your website's content, structure, and technical elements",
      color: "from-blue-500 to-purple-500",
      darkColor: "from-blue-400 to-purple-400",
    },
    {
      icon: Target,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Detailed performance tracking and monthly reports showing your SEO progress",
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-400 to-red-400",
    },
    {
      icon: Globe,
      title: "Link Building",
      description: "High-quality backlink acquisition to boost your domain authority and rankings",
      color: "from-cyan-500 to-blue-500",
      darkColor: "from-cyan-400 to-blue-400",
    },
    {
      icon: Users,
      title: "Content Strategy",
      description: "SEO-optimized content creation that engages users and ranks well in search",
      color: "from-pink-500 to-rose-500",
      darkColor: "from-pink-400 to-rose-400",
    },
  ]

  const packages = [
    {
      name: "Local SEO",
      price: "$999",
      description: "Perfect for local businesses",
      features: [
        "Google My Business optimization",
        "Local keyword research",
        "Citation building",
        "Review management",
        "Local content creation",
        "Monthly reporting",
      ],
      popular: false,
    },
    {
      name: "Professional SEO",
      price: "$1,999",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Complete SEO audit",
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO fixes",
        "Content optimization",
        "Link building campaign",
        "Monthly reporting",
        "Competitor analysis",
      ],
      popular: true,
    },
    {
      name: "Enterprise SEO",
      price: "Custom",
      description: "Advanced SEO for large organizations",
      features: [
        "Enterprise SEO strategy",
        "Multi-location optimization",
        "Advanced technical SEO",
        "Custom reporting dashboard",
        "Dedicated SEO manager",
        "Priority support",
        "Quarterly strategy reviews",
        "Advanced analytics setup",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                SEO{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
                Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We help
                businesses rank higher in search results and attract qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Get SEO Audit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    SEO Performance
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live Data</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Organic Traffic</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">+350%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Keyword Rankings</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">+280%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">+180%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive SEO solutions designed to improve your search rankings and drive organic growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-green-200 dark:group-hover:border-green-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} dark:${feature.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-green`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              SEO Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Choose the perfect SEO package for your business needs and budget
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative group ${pkg.popular ? "lg:-mt-8" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div
                  className={`bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-2 ${
                    pkg.popular
                      ? "border-green-200 dark:border-green-600 group-hover:border-green-300 dark:group-hover:border-green-500"
                      : "border-gray-100 dark:border-gray-600 group-hover:border-gray-200 dark:group-hover:border-gray-500"
                  }`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                      {pkg.description}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {pkg.price}
                    </div>
                    {pkg.price !== "Custom" && (
                      <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">per month</p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Search Results?</h2>
            <p className="text-xl text-green-100 dark:text-green-200 mb-8 max-w-3xl mx-auto transition-colors duration-300">
              Let's boost your online visibility and drive more qualified traffic to your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 dark:text-green-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start SEO Campaign</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 dark:hover:text-green-500 transition-colors duration-300"
              >
                Free SEO Audit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: app/services/software-development/page.tsx
================================================
"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Software Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Coming Soon - Custom software solutions tailored to your specific business requirements.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}



================================================
FILE: app/services/web-development/page.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Zap, Shield, Search, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to meet your specific business requirements",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect performance across all devices",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Modern Technologies",
      description: "Latest frameworks and tools including React, Next.js, and Node.js",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed with advanced caching and performance techniques",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures to protect your data and users",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Search engine friendly structure for better visibility and rankings",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact form integration",
        "3 months support",
        "SSL certificate",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "6 months support",
        "Performance optimization",
        "Analytics setup",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "Advanced security",
        "12 months support",
        "Dedicated project manager",
        "Priority support",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Web{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
                Create powerful, scalable web applications that drive business growth. Our expert developers use
                cutting-edge technologies to build websites that perform exceptionally and deliver outstanding user
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 dark:border-gray-600 transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 dark:text-gray-500 text-sm ml-4">modern-website.tsx</span>
                </div>
                <pre className="text-green-400 dark:text-green-300 font-mono text-sm">
                  {`function ModernWebsite() {
  return (
    <div className="responsive">
      <Header navigation={dynamic} />
      <Hero animation={smooth} />
      <Features interactive={true} />
      <Footer seo={optimized} />
    </div>
  );
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive web development services designed to meet your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="group-hover:border-blue-200 dark:group-hover:border-blue-500">
                  <CardContent>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Pricing Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Choose the perfect package for your web development needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative group ${pkg.popular ? "lg:-mt-8" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <Card
                  className={`${
                    pkg.popular
                      ? "border-blue-200 dark:border-blue-600 group-hover:border-blue-300 dark:group-hover:border-blue-500"
                      : "group-hover:border-gray-200 dark:group-hover:border-gray-500"
                  }`}
                  hover={false}
                >
                  <CardContent>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                        {pkg.description}
                      </p>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {pkg.price}
                      </div>
                      {pkg.price !== "Custom" && (
                        <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          One-time payment
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button variant={pkg.popular ? "primary" : "secondary"} size="lg" className="w-full">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto transition-colors duration-300">
              Let's discuss your project and create a web solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-gray-100"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



================================================
FILE: components/BusinessCall.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, MessageCircle, ArrowRight } from "lucide-react"
import Button from "./ui/Button"

export default function BusinessCall() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Schedule a free consultation with our experts to explore how we can transform your business
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Phone Call",
                description: "Direct conversation with our project specialists",
                color: "from-blue-600 to-purple-600",
                darkColor: "from-blue-500 to-purple-500",
                buttonText: "Call Now",
              },
              {
                icon: Calendar,
                title: "Schedule Meeting",
                description: "Book a convenient time for detailed discussion",
                color: "from-purple-600 to-pink-600",
                darkColor: "from-purple-500 to-pink-500",
                buttonText: "Book Meeting",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant messaging with our support team",
                color: "from-green-600 to-teal-600",
                darkColor: "from-green-500 to-teal-500",
                buttonText: "Start Chat",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-r ${option.color} dark:${option.darkColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <option.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {option.description}
                </p>
                <Button variant="outline" size="md">
                  {option.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
              Our team is ready to discuss your project requirements, provide expert advice, and create a customized
              solution that exceeds your expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg" className="flex items-center space-x-2">
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                <span>or call us at</span>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "15 min", label: "Response Time", color: "text-blue-600 dark:text-blue-400" },
                  { value: "Free", label: "Consultation", color: "text-green-600 dark:text-green-400" },
                  { value: "24/7", label: "Support", color: "text-purple-600 dark:text-purple-400" },
                ].map((indicator, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className="group">
                    <div className={`text-2xl font-bold ${indicator.color} transition-colors duration-300`}>
                      {indicator.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {indicator.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



================================================
FILE: components/CustomerReviews.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function CustomerReviews() {
  const reviews = [
    {
      platform: "Google Reviews",
      rating: 4.9,
      totalReviews: 247,
      recentReviews: [
        {
          name: "Amanda Foster",
          rating: 5,
          date: "2 days ago",
          text: "Exceptional service! They delivered our e-commerce platform ahead of schedule.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Michael Brown",
          rating: 5,
          date: "1 week ago",
          text: "The AI integration they built for us has revolutionized our workflow.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    {
      platform: "Clutch",
      rating: 4.8,
      totalReviews: 89,
      recentReviews: [
        {
          name: "Jessica Liu",
          rating: 5,
          date: "3 days ago",
          text: "Professional team with deep technical expertise. Highly recommended!",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Carlos Martinez",
          rating: 5,
          date: "5 days ago",
          text: "Their mobile app development skills are top-notch. Great communication.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    {
      platform: "Trustpilot",
      rating: 4.9,
      totalReviews: 156,
      recentReviews: [
        {
          name: "Rachel Green",
          rating: 5,
          date: "1 day ago",
          text: "Outstanding SEO results! Our organic traffic increased by 300%.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Tom Wilson",
          rating: 5,
          date: "4 days ago",
          text: "The CRM system they built has streamlined our entire sales process.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Real feedback from real clients across multiple review platforms
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              {/* Platform Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {platform.platform}
                </h3>

                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(platform.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300 dark:text-gray-600"
                      } transition-colors duration-300`}
                    />
                  ))}
                  <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {platform.rating}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Based on {platform.totalReviews} reviews
                </p>
              </div>

              {/* Recent Reviews */}
              <div className="space-y-6">
                {platform.recentReviews.map((review, reviewIndex) => (
                  <motion.div
                    key={reviewIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: reviewIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-200 dark:border-blue-600 pl-4 transition-colors duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm transition-colors duration-300">
                          {review.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                      "{review.text}"
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* View More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                View All Reviews
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-800 transition-all duration-500"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: ThumbsUp,
                value: "98%",
                label: "Positive Reviews",
                color: "from-green-500 to-teal-500",
                darkColor: "from-green-400 to-teal-400",
              },
              {
                icon: Star,
                value: "4.9",
                label: "Average Rating",
                color: "from-blue-500 to-purple-500",
                darkColor: "from-blue-400 to-purple-400",
              },
              {
                icon: MessageSquare,
                value: "500+",
                label: "Total Reviews",
                color: "from-purple-500 to-pink-500",
                darkColor: "from-purple-400 to-pink-400",
              },
            ].map((stat, index) => (
              <div key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} dark:${stat.darkColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/Footer.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const services = [
    "Web Development",
    "App Development",
    "SEO Services",
    "Cloud Infrastructure",
    "Cybersecurity Solutions",
    "IT Consulting",
    "Custom Software Development",
    "Network Optimization",
    "HR Technologies",
    // "Aeronautics Solutions",
  ]

  const company = ["About Us", "Our Team", "Careers", "Portfolio", "Case Studies", "Blog", "News", "Contact"]

  const resources = [
    "Documentation",
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
    "Sitemap",
    "FAQ",
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                <Image
                  src="/mics-logo.png"
                  alt="MICS Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">TOPAGERANKERS</span>
                <span className="text-sm text-gray-400">a MICS Product</span>
              </div>
            </div>

            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed transition-colors duration-300">
             TOPAGERANKERS is a product of MAGADH IT AND CONSULTANCY SERVICES PRIVATE LIMITED, established in February 2024, specializes in IT
              consulting, custom software development, cloud infrastructure, and cybersecurity solutions.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, text: "support@topagerankers.com" },
                { icon: Phone, text: "+91 9355273535" },
                { icon: MapPin, text: "India" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <contact.icon className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                  <span className="text-gray-400 dark:text-gray-500 transition-colors duration-300">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/${resource.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {resource}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Subscribe to Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-l-lg focus:outline-none focus:border-blue-400 dark:focus:border-blue-300 text-white transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 px-6 py-2 rounded-r-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {/* Subscribe */}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6 mb-6 md:mb-0"
            >
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500" },
                { icon: Github, href: "#", color: "hover:text-gray-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-gray-400 dark:text-gray-500 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 dark:text-gray-500 text-center md:text-right transition-colors duration-300"
            >
              <p>&copy; 2024 MAGADH IT AND CONSULTANCY SERVICES PRIVATE LIMITED. All rights reserved.</p>
              {/* <p className="text-sm mt-1">Built with ❤️ using Next.js & Tailwind CSS</p> */}
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl dark:hover:shadow-glow-blue transition-all duration-300 z-50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 bg-blue-500/5 dark:bg-blue-400/10 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}



================================================
FILE: components/Header.tsx
================================================
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const services = [
    "Web Development",
    "CRM Solutions",
    "Software Development",
    "SEO Services",
    "Mobile Development",
    "Google My Business",
    // "IT Consulting",
    // "Custom Software Development",
    // "HR Technologies",
    // "Aeronautics Solutions",
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 rounded-lg p-1.5">
            <Link href="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gray-300 rounded-lg p-1 flex items-center justify-center">
                <Image
                  src="/mics-logo.png"
                  alt="MICS Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                TOPAGERANKERS
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                a MICS Product
              </span>
            </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <span>About Us</span>
                <motion.div animate={{ rotate: activeDropdown === "about" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300"
                  >
                    <Link
                      href="/about/our-story"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      Our Story
                    </Link>
                    <Link
                      href="/about/our-team"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/about/careers"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      Careers
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <span>Services</span>
                <motion.div
                  animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300"
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                           href={`/services/${service.toLowerCase().replace(/[&]/g, "-").replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          {service}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4" />
              <a
                href="tel:+919355273535"
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                +91-93552-73535
              </a>
            </div> */}
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-shadow duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about/our-story", label: "Our Story" },
                  { href: "/about/our-team", label: "Our Team" },
                  { href: "/about/careers", label: "Careers" },
                  { href: "/services/web-development", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                >
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+919355273535"
                    className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    +91-93552-73535
                  </a>
                </motion.div>

                {/* <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium w-fit shadow-lg"
                >
                  Get Started
                </motion.button> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}



================================================
FILE: components/Hero.tsx
================================================
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Sparkles, ArrowRight, Zap, Rocket, Shield, Cloud } from "lucide-react"
import Button from "./ui/Button"

export default function Hero() {
  const [currentColor, setCurrentColor] = useState(0)
  const [code, setCode] = useState("")
  const [currentIcon, setCurrentIcon] = useState(0)

  const colors = [
    "from-blue-600 to-purple-600",
    "from-purple-600 to-pink-600",
    "from-pink-600 to-red-600",
    "from-red-600 to-orange-600",
    "from-orange-600 to-yellow-600",
    "from-yellow-600 to-green-600",
    "from-green-600 to-blue-600",
  ]

  const darkColors = [
    "from-blue-400 to-purple-400",
    "from-purple-400 to-pink-400",
    "from-pink-400 to-red-400",
    "from-red-400 to-orange-400",
    "from-orange-400 to-yellow-400",
    "from-yellow-400 to-green-400",
    "from-green-400 to-blue-400",
  ]

  const codeSnippets = [
    `function cloudInfrastructure() {
  return "Scalable & Secure";
}`,
    `const cybersecurity = () => {
  return "Advanced Protection";
};`,
    `class ITConsulting {
  optimize() { return "Strategic Solutions"; }
}`,
    `async function customSoftware() {
  return await "Innovation";
}`,
    `const aeronautics = {
  technology: "cutting-edge",
  solutions: "future-ready"
};`,
    `const hrTechnologies = {
  technology: "cutting-edge",
  solutions: "future-ready"
};`,
  ]

  const floatingIcons = [Sparkles, Code, Zap, Rocket, Shield, Cloud]

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length)
    }, 2000)

    const codeInterval = setInterval(() => {
      const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      setCode(randomCode)
    }, 3000)

    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % floatingIcons.length)
    }, 1500)

    return () => {
      clearInterval(colorInterval)
      clearInterval(codeInterval)
      clearInterval(iconInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-500">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-300/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                {(() => {
                  const IconComponent = floatingIcons[currentIcon]
                  return (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <IconComponent className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  )
                })()}
                <motion.div
                  className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-900 dark:text-white transition-colors duration-300">Transform Your</span>
              <br />
              <motion.span
                className={`bg-gradient-to-r ${colors[currentColor]} dark:${darkColors[currentColor]} bg-clip-text text-transparent`}
                key={currentColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Digital Future
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl transition-colors duration-300"
            >
              TOPAGERANKERS specializes in strategic IT solutions, cloud infrastructure optimization, robust cybersecurity
              measures, and innovative technologies for aeronautics and HR. Your forward-thinking partner for digital
              transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                className={`bg-gradient-to-r ${colors[currentColor]} dark:${darkColors[currentColor]} text-white shadow-lg hover:shadow-xl flex items-center space-x-2`}
              >
                <span>Start Your Project</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>

              <Button href="/portfolio" variant="outline" size="lg">
                View Portfolio
              </Button>
            </motion.div>

            {/* Company Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Established February 2024</span>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Interactive Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 dark:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                />
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                />
                <span className="text-gray-400 dark:text-gray-500 text-sm ml-4">Topagerankers.js</span>
              </div>

              <div className="font-mono text-sm">
                <motion.pre
                  key={code}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-400 dark:text-green-300"
                >
                  {code || codeSnippets[0]}
                </motion.pre>
              </div>

              <div className="flex items-center mt-4 text-blue-400 dark:text-blue-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code className="w-4 h-4 mr-2 ml-4" />
                </motion.div>
                <span className="text-sm">Crafting innovative IT solutions...</span>
              </div>
            </motion.div>

            {/* Enhanced Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-20 dark:opacity-30"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-400 dark:to-red-400 rounded-full opacity-20 dark:opacity-30"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 rounded-full opacity-20 dark:opacity-30"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}



================================================
FILE: components/IdeaConceptSolution.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Lightbulb, Cog, CheckCircle } from "lucide-react"

export default function IdeaConceptSolution() {
  const steps = [
    {
      icon: Lightbulb,
      title: "An Idea",
      description:
        "Every great project starts with a spark of innovation. We help you refine and shape your vision into a concrete plan.",
      color: "from-yellow-400 to-orange-500",
      darkColor: "from-yellow-300 to-orange-400",
    },
    {
      icon: Cog,
      title: "A Concept",
      description:
        "We transform your idea into a detailed concept with technical specifications, user experience design, and strategic planning.",
      color: "from-blue-500 to-purple-600",
      darkColor: "from-blue-400 to-purple-500",
    },
    {
      icon: CheckCircle,
      title: "A Solution",
      description:
        "Finally, we deliver a complete, scalable solution that exceeds expectations and drives real business results.",
      color: "from-green-500 to-teal-600",
      darkColor: "from-green-400 to-teal-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            From Idea to Reality
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our proven three-step process transforms your vision into powerful digital solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-600">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} dark:${step.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} dark:${step.darkColor} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>

                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {index + 1}
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) 1",
                  }}
                />
              </div>

              {/* Connecting Line with Animation */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3 + 0.8, duration: 0.8 }}
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 transform -translate-y-1/2 z-10 origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-blue-500/5 dark:bg-blue-400/10 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}



================================================
FILE: components/Integration.tsx
================================================
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Integration() {
  const integrations = [
    { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Microsoft Azure", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Shopify", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Stripe", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PayPal", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Slack", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Zoom", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MongoDB", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We integrate with the tools and platforms you already use, ensuring smooth workflows and enhanced
            productivity
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 dark:filter dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-800 transition-all duration-500"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "API Integration",
                description: "Seamless connection with third-party services and existing systems",
                icon: "API",
                color: "from-blue-600 to-purple-600",
                darkColor: "from-blue-500 to-purple-500",
              },
              {
                title: "Database Sync",
                description: "Real-time data synchronization across all your platforms",
                icon: "DB",
                color: "from-green-600 to-teal-600",
                darkColor: "from-green-500 to-teal-500",
              },
              {
                title: "AI Enhancement",
                description: "Intelligent automation and machine learning capabilities",
                icon: "AI",
                color: "from-purple-600 to-pink-600",
                darkColor: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} dark:${feature.darkColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <span className="text-white font-bold text-xl">{feature.icon}</span>

                  {/* Animated glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} dark:${feature.darkColor} rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 bg-blue-500/10 dark:bg-blue-400/20 rounded-full"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 3,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/Partners.tsx
================================================
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Technology Partner",
      description: "Certified Microsoft Partner for cloud solutions and enterprise software",
    },
    {
      name: "Google",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Cloud Partner",
      description: "Google Cloud Partner specializing in AI and machine learning solutions",
    },
    {
      name: "AWS",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Cloud Partner",
      description: "Amazon Web Services Partner for scalable cloud infrastructure",
    },
    {
      name: "Shopify",
      logo: "/placeholder.svg?height=80&width=160",
      category: "E-commerce Partner",
      description: "Shopify Plus Partner for enterprise e-commerce solutions",
    },
    {
      name: "Salesforce",
      logo: "/placeholder.svg?height=80&width=160",
      category: "CRM Partner",
      description: "Salesforce Consulting Partner for customer relationship management",
    },
    {
      name: "HubSpot",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Marketing Partner",
      description: "HubSpot Solutions Partner for inbound marketing and sales",
    },
    {
      name: "Stripe",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Payment Partner",
      description: "Stripe Partner for secure payment processing solutions",
    },
    {
      name: "MongoDB",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Database Partner",
      description: "MongoDB Partner for modern database solutions",
    },
    {
      name: "Vercel",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Deployment Partner",
      description: "Vercel Partner for modern web application deployment",
    },
    {
      name: "OpenAI",
      logo: "/placeholder.svg?height=80&width=160",
      category: "AI Partner",
      description: "OpenAI Partner for artificial intelligence implementations",
    },
    {
      name: "Docker",
      logo: "/placeholder.svg?height=80&width=160",
      category: "DevOps Partner",
      description: "Docker Partner for containerization and deployment solutions",
    },
    {
      name: "GitHub",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Development Partner",
      description: "GitHub Partner for version control and collaboration",
    },
  ]

  const featuredPartners = [
    {
      name: "TechCorp Solutions",
      logo: "/placeholder.svg?height=120&width=240",
      industry: "Enterprise Software",
      partnership: "Strategic Technology Partner",
      description:
        "Leading enterprise software company specializing in digital transformation solutions for Fortune 500 companies.",
      achievements: [
        "5+ years of successful collaboration",
        "50+ joint projects completed",
        "99.9% client satisfaction rate",
        "24/7 technical support coverage",
      ],
      testimonial:
        "TechSolutions has been instrumental in our digital transformation journey. Their expertise and dedication have helped us deliver exceptional results to our clients.",
      author: "Sarah Johnson, CTO at TechCorp Solutions",
      website: "www.techcorp.com",
      employees: "10,000+",
      founded: "2010",
    },
    {
      name: "InnovateLabs",
      logo: "/placeholder.svg?height=120&width=240",
      industry: "AI & Machine Learning",
      partnership: "Innovation Partner",
      description:
        "Cutting-edge AI research company developing next-generation machine learning solutions for various industries.",
      achievements: [
        "3+ years of R&D collaboration",
        "15+ AI projects delivered",
        "Multiple patent applications filed",
        "Industry-leading innovation awards",
      ],
      testimonial:
        "Our partnership with TechSolutions has accelerated our AI development capabilities. Together, we're pushing the boundaries of what's possible in machine learning.",
      author: "Dr. Michael Chen, Head of Research at InnovateLabs",
      website: "www.innovatelabs.ai",
      employees: "500+",
      founded: "2018",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We collaborate with industry leaders to deliver exceptional solutions and drive innovation
          </p>
        </motion.div>

        {/* Featured Partners */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Featured Partnerships
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Strategic alliances that drive mutual success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                  {/* Partner Header */}
                  <div className="flex items-center mb-6">
                    <motion.div whileHover={{ scale: 1.05 }} className="mr-6">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={240}
                        height={120}
                        className="h-16 w-auto dark:filter dark:brightness-0 dark:invert"
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {partner.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                          {partner.industry}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                          {partner.partnership}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{partner.employees}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Employees</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{partner.founded}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">A+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                    {partner.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      Partnership Highlights:
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {partner.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 transition-all duration-500">
                    <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 transition-colors duration-300">
                      "{partner.testimonial}"
                    </blockquote>
                    <cite className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                      - {partner.author}
                    </cite>
                  </div>

                  {/* Website Link */}
                  <div className="mt-6 text-center">
                    <a
                      href={`https://${partner.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
                    >
                      Visit {partner.website} →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Partners Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Technology Partners
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Trusted partnerships with leading technology providers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-500 text-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="h-12 w-auto mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 dark:filter dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 transition-colors duration-300">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">
                    {partner.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">Become Our Partner</h3>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Join our network of trusted partners and unlock new opportunities for growth and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 dark:text-blue-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Partner With Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/QuickSupport.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, Clock, Headphones } from "lucide-react"
import Input from "./ui/Input"
import Textarea from "./ui/Textarea"
import Select from "./ui/Select"
import Button from "./ui/Button"

export default function QuickSupport() {
  const supportOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "+91-93552-73535",
      availability: "24/7 Available",
      color: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-400 to-cyan-400",
    },
    {
      icon: Mail,
      title: "Email Sales",
      description: "Send us your detailed requirements",
      contact: "sales@topagerankers.com",
      availability: "Response within 24 hours",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging with our team",
      contact: "Start Chat Now",
      availability: "Online now",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with existing projects",
      contact: "support@topagerankers.com",
      availability: "24/7 Technical Help",
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-400 to-red-400",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Quick Support - Get In Touch Today</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Need immediate assistance? Our support team is ready to help you with any questions or project requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/20 dark:border-white/10 group-hover:border-white/40 dark:group-hover:border-white/20">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${option.color} dark:${option.darkColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg shadow-glow-blue`}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {option.description}
                </p>

                <div className="space-y-2">
                  <div className="text-lg font-semibold text-blue-300 dark:text-blue-400 transition-colors duration-300 break-words">
                    {option.contact}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {option.availability}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/10 transition-colors duration-300">
            <h3 className="text-3xl font-bold text-center mb-8">Send Us a Message</h3>

            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (234) 567-8900"
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Service Needed
                </label>
                <Select className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white">
                  <option value="" className="bg-gray-800 dark:bg-gray-900">
                    Select a service
                  </option>
                  <option value="web-development" className="bg-gray-800 dark:bg-gray-900">
                    Web Development
                  </option>
                  <option value="app-development" className="bg-gray-800 dark:bg-gray-900">
                    App Development
                  </option>
                  <option value="seo" className="bg-gray-800 dark:bg-gray-900">
                    SEO Services
                  </option>
                  <option value="ai-rd" className="bg-gray-800 dark:bg-gray-900">
                    AI R&D
                  </option>
                  <option value="other" className="bg-gray-800 dark:bg-gray-900">
                    Other
                  </option>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Project Details
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="md:col-span-2 text-center">
                <Button variant="primary" size="lg" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-red-600/20 dark:bg-red-500/20 border border-red-400/30 dark:border-red-400/20 rounded-2xl p-6 inline-block transition-colors duration-300">
            <h4 className="text-xl font-bold text-red-300 dark:text-red-400 mb-2 transition-colors duration-300">
              Emergency Support
            </h4>
            <p className="text-gray-300 dark:text-gray-400 mb-4 transition-colors duration-300">
              Critical issues? Call our emergency hotline
            </p>
            <a
              href="tel:+919355273535"
              className="text-2xl font-bold text-red-300 dark:text-red-400 hover:text-red-200 dark:hover:text-red-300 transition-colors duration-300"
            >
              +91-9355-27-3535
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/Roadmap.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle, ArrowRight } from "lucide-react"

export default function Roadmap() {
  const roadmapSteps = [
    {
      phase: "Discovery",
      title: "Project Analysis",
      description: "Understanding your requirements, goals, and technical specifications",
      status: "completed",
      duration: "1-2 weeks",
    },
    {
      phase: "Planning",
      title: "Strategy & Design",
      description: "Creating wireframes, user experience design, and technical architecture",
      status: "completed",
      duration: "2-3 weeks",
    },
    {
      phase: "Development",
      title: "Build & Code",
      description: "Agile development with regular updates and milestone deliveries",
      status: "active",
      duration: "4-8 weeks",
    },
    {
      phase: "Testing",
      title: "Quality Assurance",
      description: "Comprehensive testing, bug fixes, and performance optimization",
      status: "upcoming",
      duration: "1-2 weeks",
    },
    {
      phase: "Launch",
      title: "Deployment",
      description: "Going live with full support and monitoring for smooth launch",
      status: "upcoming",
      duration: "1 week",
    },
    {
      phase: "Support",
      title: "Maintenance",
      description: "Ongoing support, updates, and feature enhancements",
      status: "upcoming",
      duration: "Ongoing",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
      case "active":
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full shadow-glow-blue"
          />
        )
      default:
        return <Circle className="w-6 h-6 text-gray-400 dark:text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400"
      case "active":
        return "from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
      default:
        return "from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500"
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Project Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our structured approach ensures timely delivery and exceptional results at every stage
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < roadmapSteps.length - 1 && (
                <motion.div
                  className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                />
              )}

              {/* Status Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-full border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center z-10 transition-colors duration-300">
                {getStatusIcon(step.status)}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="ml-8 flex-1 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(step.status)} text-white text-sm font-semibold rounded-full shadow-lg`}
                    >
                      {step.phase}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full transition-colors duration-300">
                    {step.duration}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                  {step.description}
                </p>

                {step.status === "active" && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full shadow-glow-blue"
                  />
                )}
              </motion.div>

              {/* Arrow for active step */}
              {step.status === "active" && (
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-4 text-blue-500 dark:text-blue-400"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/Services.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Search, ShoppingCart, Database, MapPin, Globe, Monitor, Brain, Settings } from "lucide-react"

export default function Services() {
  const services = [
    { icon: Code, name: "Web Development", color: "from-blue-500 to-cyan-500", darkColor: "from-blue-400 to-cyan-400" },
    {
      icon: Smartphone,
      name: "App Development",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: Search,
      name: "SEO Services",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: ShoppingCart,
      name: "Amazon Ads",
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-400 to-red-400",
    },
    {
      icon: Database,
      name: "CRM Solutions",
      color: "from-indigo-500 to-purple-500",
      darkColor: "from-indigo-400 to-purple-400",
    },
    {
      icon: MapPin,
      name: "Google My Business",
      color: "from-red-500 to-pink-500",
      darkColor: "from-red-400 to-pink-400",
    },
    {
      icon: Globe,
      name: "Web Applications",
      color: "from-cyan-500 to-blue-500",
      darkColor: "from-cyan-400 to-blue-400",
    },
    {
      icon: Monitor,
      name: "Mobile Applications",
      color: "from-teal-500 to-green-500",
      darkColor: "from-teal-400 to-green-400",
    },
    { icon: Brain, name: "AI R&D", color: "from-pink-500 to-rose-500", darkColor: "from-pink-400 to-rose-400" },
    {
      icon: Settings,
      name: "Software Development",
      color: "from-yellow-500 to-orange-500",
      darkColor: "from-yellow-400 to-orange-400",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive IT solutions tailored to transform your business and drive digital success
          </p>
        </motion.div>

        {/* Infinite Loop Services */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll">
            {/* First set */}
            {services.map((service, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} dark:${service.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <service.icon className="w-8 h-8 text-white" />

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} dark:${service.darkColor} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  Professional {service.name.toLowerCase()} solutions designed to elevate your business and deliver
                  exceptional results.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue-600 dark:text-blue-400 font-semibold flex items-center space-x-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}

            {/* Second set for seamless loop */}
            {services.map((service, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} dark:${service.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  Professional {service.name.toLowerCase()} solutions designed to elevate your business and deliver
                  exceptional results.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue-600 dark:text-blue-400 font-semibold flex items-center space-x-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Code,
              title: "Development",
              description: "Custom web and mobile applications built with cutting-edge technologies",
              color: "from-blue-600 to-purple-600",
              darkColor: "from-blue-500 to-purple-500",
            },
            {
              icon: Search,
              title: "Marketing",
              description: "SEO, digital advertising, and online presence optimization services",
              color: "from-green-600 to-teal-600",
              darkColor: "from-green-500 to-teal-500",
            },
            {
              icon: Brain,
              title: "Innovation",
              description: "AI research, development, and implementation of next-gen solutions",
              color: "from-purple-600 to-pink-600",
              darkColor: "from-purple-500 to-pink-500",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 bg-gradient-to-r ${category.color} dark:${category.darkColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow-blue`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                {category.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}



================================================
FILE: components/SuccessStories.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, DollarSign } from "lucide-react"
import Image from "next/image"

export default function SuccessStories() {
  const successStories = [
    {
      company: "EcoTech Solutions",
      industry: "Renewable Energy",
      logo: "/placeholder.svg?height=60&width=120",
      challenge: "Outdated website with poor mobile experience",
      solution: "Complete web redesign with mobile-first approach",
      results: [
        { metric: "Website Traffic", increase: "350%", icon: TrendingUp },
        { metric: "Mobile Users", increase: "500%", icon: Users },
        { metric: "Lead Generation", increase: "280%", icon: DollarSign },
      ],
      testimonial:
        "TechSolutions transformed our digital presence completely. The results exceeded our wildest expectations.",
      author: "Sarah Mitchell, CEO",
    },
    {
      company: "UrbanFit Gym Chain",
      industry: "Fitness & Wellness",
      logo: "/placeholder.svg?height=60&width=120",
      challenge: "No mobile app for member management",
      solution: "Custom mobile app with booking and tracking features",
      results: [
        { metric: "Member Engagement", increase: "400%", icon: Users },
        { metric: "Class Bookings", increase: "250%", icon: TrendingUp },
        { metric: "Revenue Growth", increase: "180%", icon: DollarSign },
      ],
      testimonial:
        "The mobile app revolutionized how our members interact with our services. Membership retention improved dramatically.",
      author: "Marcus Rodriguez, Operations Director",
    },
    {
      company: "FreshMart Grocery",
      industry: "Retail & E-commerce",
      logo: "/placeholder.svg?height=60&width=120",
      challenge: "Low online visibility and poor local search ranking",
      solution: "Comprehensive SEO and Google My Business optimization",
      results: [
        { metric: "Local Search Ranking", increase: "600%", icon: TrendingUp },
        { metric: "Store Visits", increase: "220%", icon: Users },
        { metric: "Online Orders", increase: "450%", icon: DollarSign },
      ],
      testimonial:
        "We went from invisible to the top local search result. Our foot traffic and online sales skyrocketed.",
      author: "Jennifer Walsh, Store Manager",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Businesses Who Excelled Just By Believing In Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Real success stories from companies that trusted us to transform their digital presence
          </p>
        </motion.div>

        <div className="space-y-16">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <Image
                      src={story.logo || "/placeholder.svg"}
                      alt={story.company}
                      width={120}
                      height={60}
                      className="mr-4 dark:filter dark:brightness-0 dark:invert"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {story.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                        {story.industry}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Challenge:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                      {story.challenge}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Solution:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{story.solution}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 transition-all duration-500">
                    <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 transition-colors duration-300">
                      "{story.testimonial}"
                    </blockquote>
                    <cite className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                      - {story.author}
                    </cite>
                  </div>
                </div>

                {/* Right Content - Results */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
                    Results Achieved
                  </h4>
                  <div className="space-y-6">
                    {story.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: resultIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-600 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-500"
                      >
                        <div className="flex items-center">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center mr-4 shadow-lg"
                          >
                            <result.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                              {result.metric}
                            </h5>
                            <div className="flex items-center">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-4"
                                style={{ width: "80%" }}
                              />
                              <span className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
                                +{result.increase}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-8">Combined Impact Across All Clients</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "$50M+", label: "Revenue Generated" },
              { value: "300%", label: "Average Growth" },
              { value: "500+", label: "Success Stories" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-100 dark:text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/Team.tsx
================================================
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from './ui/Card';

export default function Team() {
    const teamMembers = [
        {
            name: 'Shwetank Dhar Dwiedi',
            role: 'CEO & Founder',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Visionary leader with 15+ years in tech innovation',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Avnish Kumar',
            role: 'CTO',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Full-stack architect specializing in scalable solutions',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Emily Rodriguez',
            role: 'Lead Designer',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Creative director crafting beautiful user experiences',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'David Kim',
            role: 'AI Research Lead',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Machine learning expert driving innovation',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Lisa Thompson',
            role: 'Project Manager',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Agile expert ensuring seamless project delivery',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Alex Martinez',
            role: 'DevOps Engineer',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Infrastructure specialist optimizing performance',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                        Talented professionals dedicated to bringing your vision
                        to life with expertise and passion
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Card className="group-hover:border-blue-200 dark:group-hover:border-blue-500">
                                <CardContent>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative mb-6"
                                    >
                                        <Image
                                            src={
                                                member.image ||
                                                '/placeholder.svg'
                                            }
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="w-32 h-32 rounded-full mx-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center transition-colors duration-300">
                                        {member.name}
                                    </h3>

                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-center transition-colors duration-300">
                                        {member.role}
                                    </p>

                                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed transition-colors duration-300">
                                        {member.bio}
                                    </p>

                                    <div className="flex justify-center space-x-4">
                                        <motion.a
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 5,
                                            }}
                                            href={member.social.linkedin}
                                            className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: -5,
                                            }}
                                            href={member.social.twitter}
                                            className="w-10 h-10 bg-sky-100 dark:bg-sky-900/50 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400 hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors duration-300"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 5,
                                            }}
                                            href={member.social.github}
                                            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Team Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
                >
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '50+', label: 'Team Members' },
                            { number: '15+', label: 'Years Experience' },
                            { number: '25+', label: 'Certifications' },
                            { number: '100%', label: 'Dedication' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    animate={{
                                        textShadow: [
                                            '0 0 0px rgba(255,255,255,0)',
                                            '0 0 10px rgba(255,255,255,0.5)',
                                            '0 0 0px rgba(255,255,255,0)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                    }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-blue-100 dark:text-blue-200">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}



================================================
FILE: components/Testimonials.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "TechSolutions transformed our outdated website into a modern, high-performing platform. The team's expertise in web development and SEO helped us increase our online presence by 300%.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, EcoGreen Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The mobile app they developed for us exceeded all expectations. User engagement increased by 250% and our app store ratings went from 3.2 to 4.8 stars. Incredible work!",
    },
    {
      name: "Sarah Kim",
      role: "Marketing Director, RetailPro",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Their Amazon Ads and SEO services completely revolutionized our online sales. We saw a 400% increase in revenue within just 3 months. The ROI has been phenomenal.",
    },
    {
      name: "David Thompson",
      role: "CTO, FinanceFlow",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The AI R&D team helped us implement machine learning solutions that automated 60% of our manual processes. Their technical expertise is unmatched in the industry.",
    },
    {
      name: "Lisa Chen",
      role: "Operations Manager, LogiTech",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The CRM solution they built for us streamlined our entire sales process. Lead conversion improved by 180% and our team productivity increased significantly.",
    },
    {
      name: "Robert Johnson",
      role: "Owner, Local Bistro",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Their Google My Business optimization brought us from page 3 to the top 3 local search results. Our foot traffic increased by 150% in just 2 months!",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500 relative">
                {/* Quote Icon */}
                <motion.div
                  whileHover={{ rotate: 180 }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Quote className="w-4 h-4 text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <motion.div whileHover={{ scale: 1.1 }} className="relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg inline-block border border-gray-100 dark:border-gray-600 transition-colors duration-300">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              4.9/5
            </div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Average rating from 500+ reviews
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/theme-provider.tsx
================================================
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}



================================================
FILE: components/ThemeProvider.tsx
================================================
"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme)
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return null
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}



================================================
FILE: components/ThemeToggle.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-yellow-500" />}
        </motion.div>
      </motion.div>

      {/* Background Icons */}
      <motion.div className="absolute inset-0 flex items-center justify-between px-2" initial={false}>
        <motion.div
          animate={{
            opacity: theme === "light" ? 0.3 : 0,
            scale: theme === "light" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-4 h-4 text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{
            opacity: theme === "dark" ? 0.3 : 0,
            scale: theme === "dark" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-4 h-4 text-blue-400" />
        </motion.div>
      </motion.div>
    </motion.button>
  )
}



================================================
FILE: components/WhyChooseUs.tsx
================================================
"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Users, Award, Clock, Globe } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "10+ years of experience delivering cutting-edge solutions across industries",
      stats: "500+ Projects",
      color: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-400 to-cyan-400",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development cycles without compromising on quality or performance",
      stats: "50% Faster",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Expert developers, designers, and strategists committed to your success",
      stats: "50+ Experts",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in web development and digital innovation",
      stats: "25+ Awards",
      color: "from-yellow-500 to-orange-500",
      darkColor: "from-yellow-400 to-orange-400",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business never stops running",
      stats: "Always Available",
      color: "from-red-500 to-pink-500",
      darkColor: "from-red-400 to-pink-400",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and global standards",
      stats: "30+ Countries",
      color: "from-indigo-500 to-purple-500",
      darkColor: "from-indigo-400 to-purple-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We combine technical excellence with creative innovation to deliver solutions that drive real business
            growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${reason.color} dark:${reason.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue dark:group-hover:shadow-glow-blue transition-all duration-300`}
                >
                  <reason.icon className="w-8 h-8 text-white" />

                  {/* Animated glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${reason.color} dark:${reason.darkColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                  {reason.description}
                </p>

                <motion.div
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {reason.stats}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 dark:text-blue-200 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 bg-white/10 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



================================================
FILE: components/ui/accordion.tsx
================================================
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }



================================================
FILE: components/ui/alert-dialog.tsx
================================================
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}



================================================
FILE: components/ui/alert.tsx
================================================
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }



================================================
FILE: components/ui/aspect-ratio.tsx
================================================
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }



================================================
FILE: components/ui/avatar.tsx
================================================
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }



================================================
FILE: components/ui/badge.tsx
================================================
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }



================================================
FILE: components/ui/breadcrumb.tsx
================================================
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}



================================================
FILE: components/ui/Button.tsx
================================================
"use client"

import React from "react"
import Link from "next/link"

interface ButtonProps {
  children: React.ReactNode
  href?: string // ✅ link के लिए
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses = "btn"
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  }
  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  // ✅ href दिया है तो Link render करो
  if (href) {
    return (
      <Link href={href}>
        <span className={classes}>{children}</span>
      </Link>
    )
  }

  // ❌ वरना Normal Button
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}



================================================
FILE: components/ui/calendar.tsx
================================================
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }



================================================
FILE: components/ui/Card.tsx
================================================
"use client"

import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return <div className={`card ${hover ? "card-hover" : ""} ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-content ${className}`}>{children}</div>
}

export function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-header ${className}`}>{children}</div>
}

export function CardFooter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-footer ${className}`}>{children}</div>
}



================================================
FILE: components/ui/carousel.tsx
================================================
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}



================================================
FILE: components/ui/chart.tsx
================================================
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}



================================================
FILE: components/ui/checkbox.tsx
================================================
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }



================================================
FILE: components/ui/collapsible.tsx
================================================
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }



================================================
FILE: components/ui/command.tsx
================================================
"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}



================================================
FILE: components/ui/context-menu.tsx
================================================
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}



================================================
FILE: components/ui/dialog.tsx
================================================
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}



================================================
FILE: components/ui/drawer.tsx
================================================
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}



================================================
FILE: components/ui/dropdown-menu.tsx
================================================
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}



================================================
FILE: components/ui/form.tsx
================================================
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}



================================================
FILE: components/ui/hover-card.tsx
================================================
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }



================================================
FILE: components/ui/input-otp.tsx
================================================
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }



================================================
FILE: components/ui/Input.tsx
================================================
"use client"

import type React from "react"

interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  required?: boolean
  disabled?: boolean
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`input ${className}`}
    />
  )
}



================================================
FILE: components/ui/label.tsx
================================================
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }



================================================
FILE: components/ui/menubar.tsx
================================================
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}



================================================
FILE: components/ui/navigation-menu.tsx
================================================
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}



================================================
FILE: components/ui/pagination.tsx
================================================
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}



================================================
FILE: components/ui/popover.tsx
================================================
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }



================================================
FILE: components/ui/progress.tsx
================================================
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }



================================================
FILE: components/ui/radio-group.tsx
================================================
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }



================================================
FILE: components/ui/resizable.tsx
================================================
"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }



================================================
FILE: components/ui/scroll-area.tsx
================================================
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }



================================================
FILE: components/ui/Select.tsx
================================================
"use client"

import type React from "react"

interface SelectProps {
  children: React.ReactNode
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
  required?: boolean
  disabled?: boolean
}

export default function Select({
  children,
  value,
  onChange,
  className = "",
  required = false,
  disabled = false,
}: SelectProps) {
  return (
    <select value={value} onChange={onChange} required={required} disabled={disabled} className={`select ${className}`}>
      {children}
    </select>
  )
}



================================================
FILE: components/ui/separator.tsx
================================================
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }



================================================
FILE: components/ui/sheet.tsx
================================================
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}



================================================
FILE: components/ui/sidebar.tsx
================================================
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}



================================================
FILE: components/ui/skeleton.tsx
================================================
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }



================================================
FILE: components/ui/slider.tsx
================================================
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }



================================================
FILE: components/ui/sonner.tsx
================================================
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }



================================================
FILE: components/ui/switch.tsx
================================================
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }



================================================
FILE: components/ui/table.tsx
================================================
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}



================================================
FILE: components/ui/tabs.tsx
================================================
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }



================================================
FILE: components/ui/Textarea.tsx
================================================
"use client"

import type React from "react"

interface TextareaProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  rows?: number
  required?: boolean
  disabled?: boolean
}

export default function Textarea({
  placeholder,
  value,
  onChange,
  className = "",
  rows = 4,
  required = false,
  disabled = false,
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      disabled={disabled}
      className={`textarea ${className}`}
    />
  )
}



================================================
FILE: components/ui/toast.tsx
================================================
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}



================================================
FILE: components/ui/toaster.tsx
================================================
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}



================================================
FILE: components/ui/toggle-group.tsx
================================================
"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }



================================================
FILE: components/ui/toggle.tsx
================================================
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }



================================================
FILE: components/ui/tooltip.tsx
================================================
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }



================================================
FILE: components/ui/use-mobile.tsx
================================================
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}



================================================
FILE: components/ui/use-toast.ts
================================================
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }



================================================
FILE: hooks/use-mobile.tsx
================================================
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}



================================================
FILE: hooks/use-toast.ts
================================================
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }



================================================
FILE: hooks/useScrollAnimation.ts
================================================
"use client"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return ref
}



================================================
FILE: lib/products.ts
================================================
import { Users, DollarSign, FileText, Banknote, Briefcase } from "lucide-react"

export const products = [
  {
    id: 1,
    name: "HRPM (Human Resource & Payroll Management)",
    slug: "hrpm",
    shortDescription: "A comprehensive solution for managing human resources and payroll efficiently.",
    detailedDescription:
      "HRPM is an all-in-one Human Resource and Payroll Management system designed to streamline your HR operations from recruitment to retirement. It automates complex tasks, ensures compliance, and provides valuable insights into your workforce.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=HRPM+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=HRPM+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=HRPM+Screenshot+3",
    ],
    features: [
      "Employee Management: Centralized database for all employee information, including personal details, employment history, and documents.",
      "Payroll Processing: Automated payroll calculations, tax deductions, benefits management, and direct deposits with customizable pay cycles.",
      "Leave Management: Comprehensive system to track and manage employee leave requests, approvals, balances, and policies.",
      "Attendance Tracking: Integrated time and attendance system with support for various methods like biometric, web, and mobile check-ins.",
      "Performance Reviews: Tools to conduct and track employee performance evaluations, set goals, and manage feedback cycles.",
      "Recruitment & Onboarding: Streamline hiring processes from job posting to candidate tracking, interview scheduling, and new employee onboarding.",
      "Compliance Management: Ensure adherence to labor laws, tax regulations, and company policies with built-in compliance features and reporting.",
      "Self-Service Portal: Empower employees with a self-service portal to access payslips, apply for leave, update personal information, and view benefits.",
      "Reporting & Analytics: Generate customizable reports and dashboards for HR metrics, payroll costs, attendance trends, and more.",
    ],
    benefits: [
      "Streamlined HR operations: automate repetitive tasks and reduce paperwork.",
      "Accurate payroll processing: minimize errors and ensure timely payments.",
      "Greater compliance: built-in adherence to tax and labor regulations.",
      "Improved employee satisfaction: self-service portal and transparent processes.",
      "Actionable insights: advanced analytics for data-driven HR decisions.",
      "Enhanced data security: role-based access and encryption of sensitive data.",
    ],
    pricing: {
      starter: { price: "$99/month", features: ["Up to 50 Employees", "Basic Payroll", "Leave Management"] },
      professional: {
        price: "$299/month",
        features: ["Up to 200 Employees", "Advanced Payroll", "Performance Management", "Attendance Tracking"],
      },
      enterprise: {
        price: "Custom",
        features: ["Unlimited Employees", "Full Customization", "Dedicated Support", "All Features"],
      },
    },
    icon: Users,
    metadata: {
      title: "HRPM - Human Resource & Payroll Management Software",
      description:
        "Comprehensive HR and payroll solution for efficient workforce management, automated payroll, and improved employee satisfaction.",
    },
  },
  {
    id: 2,
    name: "Accounting Software",
    slug: "accounting",
    shortDescription: "Robust accounting software to manage finances, invoicing, and reporting.",
    detailedDescription:
      "Our Accounting Software provides a robust and intuitive platform to manage all your financial operations. From general ledger to financial reporting, it gives you a clear and accurate overview of your financial health.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Accounting+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Accounting+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Accounting+Screenshot+3",
    ],
    features: [
      "General Ledger: Manage all financial transactions, accounts, and journal entries.",
      "Accounts Payable/Receivable: Track money owed to suppliers and money due from customers with automated reminders.",
      "Invoicing & Billing: Create and send professional invoices, manage recurring bills, and track payment statuses.",
      "Financial Reporting: Generate comprehensive financial reports including balance sheets, income statements, cash flow statements, and custom reports.",
      "Bank Reconciliation: Easily match bank statements with your accounting records to ensure accuracy.",
      "Expense Management: Track and categorize all business expenses, integrate with bank feeds for automated entry.",
      "Multi-currency Support: Handle transactions in various currencies with real-time exchange rate updates.",
      "Budgeting & Forecasting: Create and monitor budgets, and generate financial forecasts.",
      "Tax Management: Simplify tax preparation with organized financial data and reporting tools.",
    ],
    benefits: [
      "Accurate financial tracking: Keep precise records of all financial activities.",
      "Automated invoicing: Save time with automated billing and reminders.",
      "Better financial insights: Make informed decisions with real-time financial data.",
      "Compliance readiness: Simplify tax preparation and regulatory compliance.",
      "Improved cash flow: Monitor receivables and payables effectively.",
      "Reduced errors: Automate calculations and reduce manual data entry mistakes.",
    ],
    pricing: {
      starter: { price: "$79/month", features: ["Basic Accounting", "Invoicing", "Expense Tracking"] },
      professional: {
        price: "$199/month",
        features: ["Full Accounting Features", "Multi-currency", "Advanced Reporting"],
      },
      enterprise: { price: "Custom", features: ["Unlimited Users", "Dedicated Support", "Custom Integrations"] },
    },
    icon: DollarSign,
    metadata: {
      title: "Accounting Software - Manage Your Finances",
      description:
        "Robust accounting software for efficient financial management, automated invoicing, and comprehensive reporting.",
    },
  },
  {
    id: 3,
    name: "Invoicing System",
    slug: "invoicing",
    shortDescription: "An intuitive system for creating, sending, and tracking professional invoices.",
    detailedDescription:
      "Our Invoicing System is designed to simplify your billing process and accelerate payments. Create professional, customizable invoices, send them with ease, and track their status until payment is received.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Invoicing+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Invoicing+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Invoicing+Screenshot+3",
    ],
    features: [
      "Customizable Templates: Create professional invoices with your branding, logo, and custom fields.",
      "Automated Reminders: Send automatic payment reminders to clients for overdue invoices.",
      "Payment Tracking: Monitor invoice statuses (sent, viewed, paid, overdue) and track all payments.",
      "Client Management: Keep a comprehensive database of all your clients, their contact information, and billing history.",
      "Recurring Invoices: Set up invoices to be generated and sent automatically at regular intervals for recurring services.",
      "Online Payments: Integrate with popular payment gateways (e.g., Stripe, PayPal) for easy online payment collection.",
      "Estimates & Quotes: Create and send professional estimates and convert them into invoices with a single click.",
      "Reporting: Generate reports on sales, outstanding invoices, and payment trends.",
      "Multi-currency Support: Issue invoices in different currencies.",
    ],
    benefits: [
      "Faster payment collection: Accelerate your cash flow with timely invoices and reminders.",
      "Professional-looking invoices: Enhance your brand image with custom templates.",
      "Reduced manual effort: Automate repetitive invoicing tasks.",
      "Improved cash flow: Better visibility into outstanding payments.",
      "Error reduction: Minimize mistakes with automated calculations.",
      "Enhanced client relationships: Provide clear and easy-to-understand invoices.",
    ],
    pricing: {
      basic: { price: "$29/month", features: ["Up to 50 Invoices/month", "Basic Templates", "Payment Tracking"] },
      pro: {
        price: "$59/month",
        features: ["Unlimited Invoices", "Custom Templates", "Automated Reminders", "Online Payments"],
      },
      premium: {
        price: "$99/month",
        features: ["All Pro Features", "Recurring Invoices", "Multi-currency", "Advanced Reporting"],
      },
    },
    icon: FileText,
    metadata: {
      title: "Invoicing System - Create & Track Invoices",
      description:
        "Intuitive invoicing system for professional billing, automated reminders, and efficient payment tracking.",
    },
  },
  {
    id: 4,
    name: "Loan Management Application",
    slug: "loan-management",
    shortDescription: "A secure and efficient application for managing loan applications and disbursements.",
    detailedDescription:
      "Our Loan Management Application provides a secure and efficient platform for managing the entire loan lifecycle, from initial application to final repayment. It's designed for financial institutions to streamline operations and improve customer experience.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Loan+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Loan+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Loan+Screenshot+3",
    ],
    features: [
      "Loan Application Processing: Streamline the intake, validation, and processing of loan applications.",
      "Credit Scoring & Risk Assessment: Integrate with credit bureaus and use internal models for automated credit assessment and risk analysis.",
      "Disbursement Management: Efficiently manage loan disbursements, including partial and multiple disbursements.",
      "Repayment Tracking: Monitor repayment schedules, track outstanding balances, and manage late payments.",
      "Reporting & Analytics: Generate comprehensive reports on loan portfolio performance, risk exposure, and customer behavior.",
      "Collateral Management: Track and manage collateral associated with loans, including valuation and status updates.",
      "Customer Portal: Provide borrowers with a secure self-service portal to view their loan details, statements, and make payments.",
      "Automated Notifications: Send automated reminders and notifications for upcoming payments, overdue amounts, and policy changes.",
      "Compliance & Audit Trails: Ensure adherence to lending regulations with detailed audit trails and compliance reporting.",
    ],
    benefits: [
      "Streamlined loan operations: Automate workflows and reduce processing time.",
      "Reduced processing time: Faster loan approvals and disbursements.",
      "Improved risk assessment: Make informed lending decisions with comprehensive data.",
      "Enhanced compliance: Ensure adherence to lending regulations.",
      "Better customer experience: Provide transparency and easy access to loan information.",
      "Increased efficiency: Manage a larger loan portfolio with fewer resources.",
    ],
    pricing: {
      standard: { price: "$499/month", features: ["Up to 500 Loans", "Basic Reporting", "Customer Portal"] },
      premium: {
        price: "$999/month",
        features: ["Unlimited Loans", "Advanced Analytics", "Credit Scoring Integration", "Automated Notifications"],
      },
      enterprise: {
        price: "Custom",
        features: ["Full Customization", "Dedicated Support", "On-premise Deployment Option"],
      },
    },
    icon: Banknote,
    metadata: {
      title: "Loan Management Application - Efficient Loan Processing",
      description:
        "Secure application for managing loan applications, disbursements, and repayments with enhanced efficiency and compliance.",
    },
  },
  {
    id: 5,
    name: "Lead Management Application",
    slug: "lead-management",
    shortDescription: "Optimize your sales pipeline with a powerful lead management solution.",
    detailedDescription:
      "Our Lead Management Application is a powerful solution designed to help you capture, nurture, and convert leads more effectively. It streamlines your sales pipeline, improves team collaboration, and provides insights to optimize your marketing efforts.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Lead+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Lead+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Lead+Screenshot+3",
    ],
    features: [
      "Lead Capture: Collect leads from various sources including website forms, social media, email campaigns, and manual entry.",
      "Lead Nurturing: Automate follow-ups, email sequences, and engagement activities to nurture leads through the sales funnel.",
      "Lead Scoring: Prioritize leads based on their potential, engagement level, and demographic data using customizable scoring rules.",
      "Sales Pipeline Visualization: Get a clear, visual overview of your sales funnel.",
      "Reporting & Analytics: Generate comprehensive reports on lead performance, conversion rates, source effectiveness, and sales forecasts.",
      "Task Management: Assign and track tasks related to lead follow-up, meetings, and communication, ensuring no lead is missed.",
      "Integration with CRM: Seamlessly transfer qualified leads to your existing CRM system for further sales processing.",
      "Team Collaboration: Facilitate communication and collaboration among sales team members on lead assignments and updates.",
      "Customizable Workflows: Define and automate custom workflows for lead assignment, status updates, and notifications.",
    ],
    benefits: [
      "Increased lead conversion rates: Focus on the most promising leads.",
      "Improved sales efficiency: Automate lead processes and reduce manual work.",
      "Better lead tracking: Never lose track of a lead's status.",
      "Enhanced team collaboration: Share lead information and collaborate effectively.",
      "Optimized marketing campaigns: Understand which channels generate the best leads.",
      "Scalable growth: Manage a growing volume of leads without increasing overhead.",
    ],
    pricing: {
      basic: { price: "$49/month", features: ["Up to 1,000 Leads", "Basic Lead Capture", "Pipeline View"] },
      growth: {
        price: "$149/month",
        features: ["Up to 10,000 Leads", "Lead Scoring", "Automated Nurturing", "Advanced Reporting"],
      },
      enterprise: {
        price: "Custom",
        features: ["Unlimited Leads", "Full Customization", "Dedicated Account Manager", "CRM Integration"],
      },
    },
    icon: Briefcase,
    metadata: {
      title: "Lead Management Application - Optimize Your Sales Pipeline",
      description:
        "Powerful lead management solution to capture, nurture, and convert leads efficiently, improving sales and team collaboration.",
    },
  },
]



================================================
FILE: lib/utils.ts
================================================
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




================================================
FILE: styles/globals.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}



