import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode based on the 'dark' class
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a1a', // Dark background
          light: '#2a2a2a',   // Slightly lighter dark for elements
        },
        primary: {
          DEFAULT: '#ffffff', // White text for dark mode
          dark: '#cccccc',    // Slightly darker white for secondary text
        },
        accent: {
          DEFAULT: '#FBBF24', // Yellow/Gold accent from reference image
          dark: '#E2B000',    // Darker accent for hover/active states
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example sans-serif font
        serif: ['Georgia', 'serif'],   // Example serif font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
