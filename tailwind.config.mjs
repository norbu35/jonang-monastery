/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "tibetan": ["Noto Serif Tibetan", "sans-serif"],
        "quicksand": ["Quicksand", "sans-serif"],
        "garamond": ["Cormorant Garamond", "serif"],
        "opensans": ["Open Sans", "sans-serif"],
        "trirong": ["Trirong", "serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
