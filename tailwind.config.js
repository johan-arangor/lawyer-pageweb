/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        'primary-dark': '#0f0f0f',
        'primary-light': '#2a2a2a',
        accent: '#b39b72',
        'accent-light': '#c9b48e',
        'accent-pale': '#f3ece0',
        slate: '#f1f3f8',
        gray: '#e8edf5',
        text: '#1a1a1a',
        'text-secondary': '#4a4a4a',
        'text-muted': '#808080',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Georgia', 'serif'],
        sans: ["'Montserrat'", 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
