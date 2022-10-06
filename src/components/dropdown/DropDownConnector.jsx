import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '16px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  connector: {
    width: '1px',
    height: '100%',
    background: theme.palette.secondary.main,
  },
}));

function DropDownConnector() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.connector} />
    </Box>
  );
}

export default DropDownConnector;
