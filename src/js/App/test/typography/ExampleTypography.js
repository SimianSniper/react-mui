import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },

}), { name: 'ExampleTypography' });

const ExampleTypography = () => {
  const classes = useStyles();

  return (
    <>
      <Box m={1} color="red" className={classes.paper}>
        <Typography variant="h1" color="primary" gutterBottom>
          H1 - Primary
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
    </>
  );
};

ExampleTypography.displayName = 'ExampleTypography';
export default ExampleTypography;
