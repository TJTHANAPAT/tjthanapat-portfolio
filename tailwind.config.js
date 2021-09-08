module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto'],
      body: ['Roboto'],
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF961D',
          50: '#FFFFFF',
          100: '#FFF5E9',
          200: '#FFDDB6',
          300: '#FFC583',
          400: '#FFAE50',
          500: '#FF961D',
          600: '#E97D00',
          700: '#B66100',
          800: '#834600',
          900: '#502B00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
