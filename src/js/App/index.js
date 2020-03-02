import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import TypographyTest from './test/typography';
// import ViewportTest from './test/viewport;
import Layout from './test/layout/Layout';


let theme = createMuiTheme({
  typography: {
    fontSize: 16,
    htmlFontSize: 10,
  },

  palette: {
    /** "contrastThreshold" increases the
     * point at which a background color
     * is considered light, and given a
     * dark "contrastText" */
    contrastThreshold: 4,

    /** A higher value for "tonalOffset"
     * will make calculated values for
     * "light" lighter, and "dark" darker. */
    tonalOffset: 0.15,

    primary: {
      main: '#3e5ac8',
    },
    secondary: {
      main: '#95a2cc',
    },
    text: {
      primary: '#192346',
      secondary: '#28292e',
    },
    background: {
      default: '#95a2cc',
    },
  },

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      // disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },

  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: 'blue',
      },
    },
    MuiTypography: {
      root: {
        // color: 'yellow',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#cedfef',
      },
    },
  },
});

const responsiveOptions = {
  variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  factor: 2,
};

theme = responsiveFontSizes(theme, responsiveOptions);

console.log('theme', theme);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ScopedCssBaseline>

      <Layout spacing={6} />

      {/* <Box mx={1} p={4} style={{ backgroundColor: theme.palette.primary.dark }} />
      <Box mx={1} p={4} style={{ backgroundColor: theme.palette.primary.main }} />
      <Box mx={1} p={4} style={{ backgroundColor: theme.palette.primary.light }} /> */}

      {/* <Box m={1}>
        <TypographyTest />
      </Box> */}

      {/* <Box m={1}>
        <ViewportTest />
      </Box> */}
    </ScopedCssBaseline>
  </MuiThemeProvider>
);

App.displayName = 'theApp';
export default App;
