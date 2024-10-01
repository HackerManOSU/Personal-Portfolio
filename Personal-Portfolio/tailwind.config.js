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
        // glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        wobble: {
          '33%': { transform: 'rotate(3deg)' },
          '66%': { transform: 'rotate(-3deg)' },
        },
        /*glow: {
          '0%': {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff',
          },
          '100%': {
            textShadow:
              '0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff',
          },
        }, */
      },
    },
  },
  plugins: [],
}

