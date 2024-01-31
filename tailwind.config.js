/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'rich-black': '0B0D17',
        'periwinkle': 'D0D6F9',
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"]
      },
      backgroundImage: {
        'home-bg': "url('./src/assets/home/background-home-desktop.jpg')",
        'home-bg-s': "url('./src/assets/home/background-home-mobile.jpg')",
        'home-bg-m': "url('./src/assets/home/background-home-tablet.jpg')",
      }
    },
  },
  plugins: [],
};
