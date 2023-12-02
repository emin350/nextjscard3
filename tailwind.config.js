/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#787272',
        'gray-dark': '#9E8F8C',
        'gray': '#EFDDD9',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}
