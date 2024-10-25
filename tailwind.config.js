/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.css',
  ],
  theme: {
    extend: {
      animation: {
        wobble: 'wobble 10s ease-in-out infinite alternate',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        wobble: {
          '33%': { transform: 'rotate(3deg)' },
          '66%': { transform: 'rotate(-3deg)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
