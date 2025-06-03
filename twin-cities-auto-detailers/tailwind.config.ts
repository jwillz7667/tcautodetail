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
        background: "hsl(var(--background))", // Main background (light)
        foreground: "hsl(var(--foreground))", // Main text (dark)
        primary: {
          DEFAULT: "hsl(var(--primary))", // Accent blue
          foreground: "hsl(var(--primary-foreground))", // Text on accent blue
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Accent gold/yellow
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Subtle backgrounds/borders
          foreground: "hsl(var(--muted-foreground))", // Subtle text
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Card background
          foreground: "hsl(var(--card-foreground))", // Card text
        },
        // Custom colors based on image
        brand: {
          blue: "#007BFF", // Example blue from image
          yellow: "#FFD700", // Example yellow from image (car)
          charcoal: "#1A202C", // Dark background
          "charcoal-light": "#2D3748", // Slightly lighter dark
          "steel-gray": "#4A5568",
          "light-gray": "#F7FAFC", // Light section background
          white: "#FFFFFF",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        heading: ["var(--font-heading)", "Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"], // Example bold font
      },
      boxShadow: {
        "neumorphic-light": "5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff",
        "neumorphic-light-inset": "inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff",
        "neumorphic-dark": "5px 5px 10px #161b22, -5px -5px 10px #2c3542", // Example dark neumorphic
        "neumorphic-dark-inset": "inset 5px 5px 10px #161b22, inset -5px -5px 10px #2c3542",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
