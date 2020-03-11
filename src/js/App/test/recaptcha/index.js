import React, { useState, useEffect } from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ReCaptchaTest from './ReCaptcha';

const App = () => {
  const theme = createMuiTheme();

  const [state, setState] = useState({ gRecaptcha: '' });

  const handleRecaptcha = value => {
    console.log('handling ReCaptcha change');
    setState({ gRecaptcha: value });
  };

  useEffect(() => {
    if (state.gRecaptcha !== '' && state.gRecaptcha !== null) {
      console.log('Recaptcha data recieved - ', state.gRecaptcha);
    }
  }, [state.gRecaptcha]);

  return (

    <MuiThemeProvider theme={theme}>
      <ScopedCssBaseline>

        <Box m={1}>
          <ReCaptchaTest
            debug
            sitekey="6LcV5t8UAAAAAL2Fkfqc5nq4HfcloZA2T30qY6J2"
            onChange={handleRecaptcha}
          />

          {/*
            // <TypographyTest />
            // <LayoutTest />
            // <ViewportTest />
          */}
        </Box>

      </ScopedCssBaseline>
    </MuiThemeProvider>

  );
};

App.displayName = 'ReCaptcha';
export default App;
