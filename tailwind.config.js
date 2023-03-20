/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      mono: "Space Mono",
    },

    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-strong-cyan": "hsl(183, 100%, 15%)",
        "gray-cyan": "hsl(184, 14%, 56%)",
        "light-gray-cyan": "hsl(185, 41%, 84%)",
        "very-light-gray-cyan": "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
};
