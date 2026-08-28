/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        datadog: {
          dark: '#0F0B21',
          card: '#161033',
          cardHover: '#1E1644',
          border: '#2A2058',
          purple: '#6366F1',
          purpleLight: '#818CF8',
          accent: '#A855F7',
          pink: '#EC4899',
          emerald: '#10B981',
          amber: '#F59E0B',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
