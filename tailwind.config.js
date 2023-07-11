/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
        pop: 'var(--font-poppins)',
      },
      colors: {
        background: '#f8f8f8', // #5c5470 => color default
        primary: '#352f44',
        form: '#eaeaea',
        pomodoro: '#453953',
      },
    },
  },
  plugins: [],
}
