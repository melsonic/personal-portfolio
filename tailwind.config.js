/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pbg': '#0F1724',
        'pviolet': '#935DD5',
        'pcyan': '#13A9C2'
      },
      height: {
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '168': '42rem',
      },
      width: {
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '172': '43rem',
      },
    },
  },
  plugins: [],
}

