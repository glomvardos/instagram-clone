module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '451px',
      },
      colors: {
        whiteBg: '#FAFAFA',
        gray: '#DBDBDB',
        grayDarker: '#8E8E8E',
        grayBorderDarker: '#A8A8A8',
        lightBlue: '#B2DFFC',
        blue: '#385185',
        authBlue: '#0095f6',
        blueDarker: '#00376b',
        textDark: '#262626',
        errorAlert: '#ED4956',
      },
      height: {
        custom1: '1px',
      },
      maxWidth: {
        350: '350px',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        4: '4px',
      },
      padding: {
        1: '5px',
      },
      margin: {
        custom18: '18px',
      },
      fontSize: {
        13: '13px',
        17: '17px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
