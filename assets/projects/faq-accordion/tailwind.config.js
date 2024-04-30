/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/background-pattern-desktop.svg')",
        "hero-pattern-mobile": "url('/assets/images/background-pattern-mobile.svg')",
      },
      backgroundColor: {
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "white-color": "hsl(0, 0%, 100%)",
      },
      colors: {
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "white-color": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
