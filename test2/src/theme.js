import { createMuiTheme } from '@material-ui/core/styles'


const notoSansThai = {
  fontFamily: 'NotoserifThai',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: 'url("/fonts/NotoSansThai-Regular.woff2") format("woff2")',
};

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: '1.33em',
      color: '#024825'
    },
    fontFamily: [
      'NotoSerifThai',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [notoSansThai],
      },
    },
  },
  palette: {
    primary: {
      main: '#da0010',
    },
    secondary: {
      main: '#faeb94',
    },
    tertiary: {
      main: '#BE8428',
    },
    text: {
      primary: '#020202',
      secondary: '#ffffff',
      tertiary: '#777',
    },
    divider: '#e5e5e5',
    background: {
      gradientPrimary: 'linear-gradient(to top, #e20f32 0%, #e61818 35%, #cb162e 73%, #8c162e 100%)'
    }
  },
});

export default theme;
