import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
//import ExampleTypography from './test/ExampleTypography';
//import useViewport from './hooks/useViewport';
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
//import Skeleton from '@material-ui/lab/Skeleton';

let theme = createMuiTheme({
  typography: {
    htmlFontSize: 10
  },
  palette: {
    primary: {main: '#ffcccc'},
  }
});
theme = responsiveFontSizes(theme);

const App = () => {
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ExampleTypography /> */}
      {/* {viewWidth < breakpoint ? 'Mobile Component' : 'Desktop Component'} */}
    </MuiThemeProvider>
  )
};

export default App;
