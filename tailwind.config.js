/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#0B0D17",
        periwinkle: "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        'home-lg': "url('/src/assets/home/background-home-desktop.jpg')",
        'home-md': "url('/src/assets/home/background-home-tablet.jpg')",
        'home-sm': "url('/src/assets/home/background-home-mobile.jpg')",
        'destination-lg': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'destination-md': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'destination-sm': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'crew-lg': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crew-md': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'crew-sm': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'technology-lg': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'technology-md': "url('/src/assets/technology/background-technology-tablet.jpg')",
        'technology-sm': "url('/src/assets/technology/background-technology-mobile.jpg')",
        
      }
    },
  },
  plugins: [],
};
