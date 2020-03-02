import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}), { name: 'ExampleTypography' });


const ExampleTypography = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.paper}>
        <Typography variant="h1" color="primary" gutterBottom>
          H1 - Primary
        </Typography>
        <Typography variant="h2" color="secondary" gutterBottom>
          h2 - Secondary
        </Typography>
        <Typography variant="h3" color="textPrimary" gutterBottom>
          h3 - Text-Primary
        </Typography>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          h4 - Text-Secondary
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6
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
          button Text
        </Typography>
        <Typography variant="caption" gutterBottom>
          caption Text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline Text
        </Typography>
      </Box>
    </>
  );
};

ExampleTypography.displayName = 'ExampleTypography';
export default ExampleTypography;
