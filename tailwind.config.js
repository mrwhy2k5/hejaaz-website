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
          // Primary - Industrial Blue
          primary: '#0B1F3A',
          'primary-light': '#122b4d',
          // Secondary - Safety Teal
          secondary: '#1FB6AA',
          'secondary-light': '#2dd4bf',
          'secondary-dark': '#14a89c',
          // Accent - Warning Amber
          accent: '#F5A623',
          'accent-light': '#f7b84a',
          'accent-dark': '#d9911a',
          // Backgrounds
          white: '#FFFFFF',
          surface: '#F6F8FB',
          'surface-alt': '#EEF2F6',
          // Text
          text: '#1F2937',
          'text-light': '#6B7280',
          'text-muted': '#9CA3AF',
          // Borders
          border: '#E5E7EB',
          'border-dark': '#D1D5DB',
          // Legacy aliases for compatibility
          dark: '#0B1F3A',
          'dark-light': '#122b4d',
          gray: '#1F2937',
          'gray-light': '#6B7280',
          'gray-muted': '#9CA3AF',
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
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 40px -10px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'elevated': '0 20px 60px -15px rgb(0 0 0 / 0.15)',
        'header': '0 1px 3px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}
