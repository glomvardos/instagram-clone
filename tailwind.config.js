module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whiteBg: '#FAFAFA',
        gray: '#DBDBDB',
        grayDarker: '#8E8E8E',
        grayBorderDarker: '#A8A8A8',
        lightBlue: '#B2DFFC',
        textDark: '#262626',
      },
      maxWidth: {
        350: '350px',
      },
      borderWidth: {
        1: '1px',
      },
      padding: {
        1: '5px',
      },
      fontSize: {
        13: '13px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
