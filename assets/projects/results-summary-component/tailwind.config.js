/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          "light-red": "hsl(0, 100%, 67%)",
          "orangey-yellow": "hsl(39, 100%, 56%)",
          "green-teal": "hsl(166, 100%, 37%)",
          "cobalt-blue": "hsl(234, 85%, 45%)",
        },
        gradients: {
          "light-slate-blue": "hsl(252, 100%, 67%)", //
          "light-royal-blue": "hsl(241, 81%, 54%)",
          "color-midnight": "hsl(256, 72%, 46%, 1)",
          "persian-blue": "hsl(241, 72%, 46%, 0)",
        },
        neutral: {
          "color-white": "hsl(0, 0%, 100%)",
          "pale-blue": "hsl(221, 100%, 96%)",
          "light-lavender": "hsl(241, 100%, 89%)",
          "dark-gray-blue": "hsl(224, 30%, 27%)",
        },
      },
      colors: {
        primary: {
          "light-red": "hsl(0, 100%, 67%)",
          "orangey-yellow": "hsl(39, 100%, 56%)",
          "green-teal": "hsl(166, 100%, 37%)",
          "cobalt-blue": "hsl(234, 85%, 45%)",
        },
        neutral: {
          "color-white": "hsl(0, 0%, 100%)",
          "pale-blue": "hsl(221, 100%, 96%)",
          "light-lavender": "hsl(241, 100%, 89%)",
          "dark-gray-blue": "hsl(224, 30%, 27%)",
        },
      },
      fontFamily: {
        hankenGrotesk: ["Hanken Grotesk, sans-serif"],
      },
    },
  },
  plugins: [],
};
