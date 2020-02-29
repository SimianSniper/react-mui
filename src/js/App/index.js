import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from './test/typography';


let theme = createMuiTheme({
  palette: {
    // primary: {main: '#ff0000'},
  },
  typography: {
    fontSize: 16,
    htmlFontSize: 10,
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to cha  nge
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
        color: 'yellow',
      },
    },
  },
});

const options = {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  factor: 2,
  variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
};

theme = responsiveFontSizes(theme, options);

console.log('theme', theme);

const App = () => (
  <MuiThemeProvider theme={theme}>

    <ScopedCssBaseline />

    <Box m={6} p={4}>

      <Typography />

    </Box>

  </MuiThemeProvider>
);

App.displayName = 'theApp';
export default App;
