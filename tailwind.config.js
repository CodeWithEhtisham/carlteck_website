/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '750': '750ms', // Add a custom duration value
        '1000': '1000ms', // Add another custom duration value if needed
      },
    },
  },
  plugins: [],
}

