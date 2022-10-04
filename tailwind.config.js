/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silver: '#ADB8B7',
        powder: '#F8FDFC',
        'dark-grey': '#4C5251',
      },
      boxShadow: {
        post: '0px 0px 20px 2px rgba(115, 128, 124, 0.17)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
