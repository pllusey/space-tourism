/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0B0D17',
        'periwinkle': '#D0D6F9',
        'white': '#FFFFFF',
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"]
      },
    },
  },
  plugins: [],
};
