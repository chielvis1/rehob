/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#002d72',
          yellow: '#ffde00',
        },
      },
      fontFamily: {
        sans: ['Halcome', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}