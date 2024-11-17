/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mplus': ['"M PLUS Rounded 1c"', 'sans-serif']
      },
      colors: {
        'primary': '#319795',
        'background': {
          light: '#f0e7db',
          dark: '#202023'
        },
        'text': {
          light: '#1a202c',
          dark: '#eeeeee'
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}