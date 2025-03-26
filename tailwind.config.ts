import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(220, 70%, 50%)",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(220, 70%, 95%)",
          100: "hsl(220, 70%, 90%)",
          200: "hsl(220, 70%, 80%)",
          300: "hsl(220, 70%, 70%)",
          400: "hsl(220, 70%, 60%)",
          500: "hsl(220, 70%, 50%)",
          600: "hsl(220, 70%, 45%)",
          700: "hsl(220, 70%, 40%)",
          800: "hsl(220, 70%, 30%)",
          900: "hsl(220, 70%, 20%)",
        },
        secondary: {
          DEFAULT: "hsl(280, 70%, 50%)",
          foreground: "hsl(var(--secondary-foreground))",
          50: "hsl(280, 70%, 95%)",
          100: "hsl(280, 70%, 90%)",
          200: "hsl(280, 70%, 80%)",
          300: "hsl(280, 70%, 70%)",
          400: "hsl(280, 70%, 60%)",
          500: "hsl(280, 70%, 50%)",
          600: "hsl(280, 70%, 45%)",
          700: "hsl(280, 70%, 40%)",
          800: "hsl(280, 70%, 30%)",
          900: "hsl(280, 70%, 20%)",
        },
        accent: {
          DEFAULT: "hsl(30, 100%, 50%)",
          foreground: "hsl(var(--accent-foreground))",
          50: "hsl(30, 100%, 95%)",
          100: "hsl(30, 100%, 90%)",
          200: "hsl(30, 100%, 80%)",
          300: "hsl(30, 100%, 70%)",
          400: "hsl(30, 100%, 60%)",
          500: "hsl(30, 100%, 50%)",
          600: "hsl(30, 100%, 45%)",
          700: "hsl(30, 100%, 40%)",
          800: "hsl(30, 100%, 30%)",
          900: "hsl(30, 100%, 20%)",
        },
        destructive: {
          DEFAULT: "hsl(358, 85%, 52%)",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s infinite",
        "bounce-subtle": "bounce-subtle 2s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/placeholder.svg?height=1080&width=1920')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

