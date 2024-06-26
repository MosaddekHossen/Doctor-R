/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: '"Source Sans 3", "sans-serif"',
      },
      maxWidth: {
        'custom': '1140px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

