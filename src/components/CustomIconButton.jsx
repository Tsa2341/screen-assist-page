import { IconButton, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    padding: 0,
    margin: 0,
  },
}));

function CustomIconButton({ children, className, ...props }) {
  const classes = useStyles();
  return (
    <IconButton className={clsx(classes.root, className)} {...props}>
      {children}
    </IconButton>
  );
}

export default CustomIconButton;
