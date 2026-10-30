/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071D3B',
          deep: '#06152D',
          dark: '#030B17',
          light: '#0D2B56',
          muted: '#1E3A63',
          50: '#F0F4F9',
          100: '#DCE4F0',
          200: '#BAC9DF',
          800: '#071D3B',
          900: '#06152D',
          950: '#030B17',
        },
        red: {
          brand: '#C71925',
          'brand-hover': '#AB141F',
          'brand-light': '#FDE8EA',
          'brand-dark': '#8E0E17',
        },
        yellow: {
          brand: '#FFC928',
          'brand-hover': '#E5B11B',
          'brand-light': '#FFF9E6',
          'brand-dark': '#C99808',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#997F24',
        },
        text: {
          main: '#17243A',
          muted: '#4B5B76',
          light: '#6E7C94',
        },
        surface: {
          DEFAULT: '#F3F5F8',
          card: '#FFFFFF',
          alt: '#EAEFF5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -5px rgba(7, 29, 59, 0.12), 0 4px 10px -2px rgba(7, 29, 59, 0.05)',
        'brand-lg': '0 20px 40px -10px rgba(7, 29, 59, 0.2), 0 8px 16px -4px rgba(7, 29, 59, 0.1)',
        'red-cta': '0 8px 24px -4px rgba(199, 25, 37, 0.35)',
        'yellow-cta': '0 8px 24px -4px rgba(255, 201, 40, 0.45)',
        'card-hover': '0 20px 35px -8px rgba(7, 29, 59, 0.15)',
      },
    },
  },
  plugins: [],
}
