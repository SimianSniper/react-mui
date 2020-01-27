import React from 'react'
import { Box, Text } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    primary: {main: '#fc0'},
    secondary: green,
  }
});
theme = responsiveFontSizes(theme);
console.log('theme', theme)

const useStyles = makeStyles(theme => ({
  default: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Box m={1} color="red" className={classes.paper}>
        <Typography variant="h1" color="primary" gutterBottom>
          h1. Heading - primary
        </Typography>
        <Typography variant="h2" color="secondary" gutterBottom>
          h2. Heading - secondary
        </Typography>
        <Typography variant="h3" color="textPrimary" gutterBottom>
          h3. Heading - text-Primary
        </Typography>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          h4. Heading - text-Secondary
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet,  adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
      <Box m={1} color="red" className={classes.default}>
        <Typography variant="h1" color="primary" gutterBottom>
          h1. Heading - primary
        </Typography>
        <Typography variant="h2" color="secondary" gutterBottom>
          h2. Heading - secondary
        </Typography>
        <Typography variant="h3" color="textPrimary" gutterBottom>
          h3. Heading - text-Primary
        </Typography>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          h4. Heading - text-Secondary
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet,  adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
    </MuiThemeProvider>
  )
}

export default App
