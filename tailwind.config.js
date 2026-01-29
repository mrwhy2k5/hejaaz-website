/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hejaaz: {
          dark: '#0f172a',
          'dark-light': '#1e293b',
          gray: '#334155',
          'gray-light': '#64748b',
          'gray-muted': '#94a3b8',
          steel: '#475569',
          accent: '#0d9488',
          'accent-light': '#14b8a6',
          'accent-dark': '#0f766e',
          white: '#ffffff',
          surface: '#f8fafc',
          'surface-alt': '#f1f5f9',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '76rem',
        'narrow': '52rem',
        'tight': '40rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 10px 40px -10px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'elevated': '0 20px 60px -15px rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
}
