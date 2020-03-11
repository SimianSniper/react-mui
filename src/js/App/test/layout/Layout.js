import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


// let theme = createMuiTheme({
//   typography: {
//     fontSize: 16,
//     htmlFontSize: 10,
//   },

//   palette: {
//     /** "contrastThreshold" increases the
//      * point at which a background color
//      * is considered light, and given a
//      * dark "contrastText" */
//     contrastThreshold: 4,

//     /** A higher value for "tonalOffset"
//      * will make calculated values for
//      * "light" lighter, and "dark" darker. */
//     tonalOffset: 0.15,

//     primary: {
//       main: '#3e5ac8',
//     },
//     secondary: {
//       main: '#95a2cc',
//     },
//     text: {
//       primary: '#192346',
//       secondary: '#28292e',
//     },
//     background: {
//       default: '#95a2cc',
//     },
//   },

//   spacing: factor => `${0.25 * factor}rem`,

//   props: {
//     // Name of the component ⚛️
//     MuiButtonBase: {
//       // The default props to change
//       // disableRipple: true, // No more ripple, on the whole application 💣!
//     },
//   },

//   overrides: {
//     MuiButton: {
//       containedPrimary: {
//         backgroundColor: 'blue',
//       },
//     },
//     MuiTypography: {
//       root: {
//         // color: 'yellow',
//       },
//     },
//     MuiPaper: {
//       root: {
//         backgroundColor: '#cedfef',
//       },
//     },
//   },
// });

// const responsiveOptions = {
//   variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
//   breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
//   factor: 2,
// };

// theme = responsiveFontSizes(theme, responsiveOptions);

// //console.log('theme', theme);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '1280px',
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '1.6rem',
  },
}), { name: 'FullWidthGrid' });

export default function FullWidthGrid() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme)

  return (
    <div className={classes.root}>

      <Box mx={1} p={4} style={{ backgroundColor: theme.palette.primary.dark }} />
      <Box mx={1} p={4} style={{ backgroundColor: theme.palette.primary.main }} />
      <Box mx={1} p={4} style={{ backgroundColor: theme.palette.primary.light }} />

      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.displayName = 'FullWidthGrid';
