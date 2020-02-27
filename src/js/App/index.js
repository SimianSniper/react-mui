import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Viewport from './test/viewport'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

let theme = createMuiTheme({
  typography: {
    htmlFontSize: 10
  },
  palette: {
    primary: {main: '#ff0000'},
  }
});
theme = responsiveFontSizes(theme);

const App = () => {
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box m={6}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
        />
      </Box>
      <Viewport />

    </MuiThemeProvider>
  )
};

export default App;
