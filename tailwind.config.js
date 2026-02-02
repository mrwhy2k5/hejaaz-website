/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Industrial Theme Color Palette
        // Inspired by Siemens, ABB, Klug Avalon, Schneider Electric
        hejaaz: {
          // Primary - Deep Industrial Blue
          primary: '#0B1F3A',
          'primary-light': '#132B4D',
          'primary-dark': '#071428',

          // Secondary - Safety Teal
          secondary: '#1FB6AA',
          'secondary-light': '#3CC9BE',
          'secondary-dark': '#17928A',

          // Accent - Warning Amber
          accent: '#F5A623',
          'accent-light': '#FFBA47',
          'accent-dark': '#D8910F',

          // Backgrounds
          surface: '#F1F5F9',
          'surface-light': '#F8FAFC',
          'surface-alt': '#EEF2F7',
          white: '#FFFFFF',



          // Text Colors
          dark: '#1F2937',
          'dark-secondary': '#374151',
          gray: '#6B7280',
          'gray-light': '#9CA3AF',

          // Border Colors
          border: '#E2E8F0',

          // Legacy mappings (for backward compatibility)
          'industrial-blue': '#0B1F3A',
          'safety-teal': '#1FB6AA',
          steel: '#475569',
        },
      },

      // Extend ring colors to include custom hejaaz colors
      ringColor: {
        hejaaz: {
          primary: '#0B1F3A',
          secondary: '#1FB6AA',
          accent: '#F5A623',
        },
      },
      // Extend border colors
      borderColor: ({ theme }) => ({
        ...theme('colors'),
      }),
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow': '48rem',
        'wide': '80rem',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'elevated': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'header': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px 0 rgb(0 0 0 / 0.03)',
        'industrial': '0 4px 20px -2px rgb(11 31 58 / 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #0B1F3A 0%, #132B4D 100%)',
        'gradient-safety': 'linear-gradient(135deg, #1FB6AA 0%, #17928A 100%)',
        'gradient-surface': 'linear-gradient(180deg, #F6F8FB 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}
