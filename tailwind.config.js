/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffbd2e',

      },
      boxShadow: {
        // 'tooltip-shadow': '0px 0px 8px 0px #00000040',
      },
      spacing: {
        // '128': '35rem',
        // 'mobile-oflow': '45rem',
      }
    }
  },
  plugins: [],
}



