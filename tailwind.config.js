/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        robotto: ["Roboto", "sans-serif"],
      }
    },
    screens: {
      'sm:': '640px',
    },
    keyframes: {
      'slide-up': {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      'slide-up': 'slide-up 0.3s ease-out',
    },

  },
  plugins: [],
}

