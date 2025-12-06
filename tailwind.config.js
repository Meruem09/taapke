/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // if you use app router
    "./pages/**/*.{js,ts,jsx,tsx}",    // if you use pages router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["MyFont"], // 👈 our custom font family
      },
    },
  },
  plugins: [],
};
