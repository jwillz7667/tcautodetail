/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      colors: {
        primary: '#FF0000', // Bright red from logo
        secondary: '#1F2937', // Dark gray
        'gray-850': '#18202D', // Custom gray for gradients
        'white-alpha': {
          10: 'rgba(255, 255, 255, 0.1)',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}