/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#e6f0ff',
        'accent-gray': '#f0f0f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            h2: {
              fontWeight: '700',
              marginTop: '2em',
            },
            h3: {
              fontWeight: '600',
              marginTop: '1.5em',
            },
            pre: {
              backgroundColor: '#f3f4f6',
              padding: '1em',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.25em',
              borderRadius: '0.25em',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 