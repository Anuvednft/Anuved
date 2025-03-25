/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light background colors
        background: {
          light: '#F5F8FF',
          lighter: '#FFFFFF', 
          DEFAULT: '#F5F8FF',
        },
        // Primary accent color (teal/blue)
        primary: {
          light: '#17CDD7',
          DEFAULT: '#15B1D4',
          dark: '#0F7995',
        },
        // Secondary accent color (purple/pink)
        secondary: {
          light: '#7C4DFF',
          DEFAULT: '#6C3BFF',
          dark: '#5D2DFF',
        },
        // Text colors for light mode
        text: {
          primary: '#1A1A2E',
          secondary: '#4A5568',
          muted: '#718096',
        },
        // Surface/card colors for light mode
        surface: {
          light: '#FFFFFF',
          DEFAULT: '#F0F4FF',
          dark: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'background-shine': 'background-shine 8s linear infinite',
        'bg-pulse': 'bg-pulse 10s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'background-shine': {
          'from': {
            'backgroundPosition': '0 0'
          },
          'to': {
            'backgroundPosition': '-200% 0'
          }
        },
        'bg-pulse': {
          '0%, 100%': {
            'background-size': '100% 100%',
            'background-position': '0% 0%'
          },
          '50%': {
            'background-size': '120% 120%',
            'background-position': '50% 50%'
          }
        }
      }
    },
  },
  plugins: [],
} 