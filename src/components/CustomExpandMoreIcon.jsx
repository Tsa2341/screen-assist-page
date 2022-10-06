import { makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: ({ rotate }) => ({
    fontSize: '1rem',
    fill: theme.palette.secondary.main,
    rotate: `${rotate}deg`,
  }),
}));

function CustomExpandMoreIcon({ rotate, className, ...props }) {
  const classes = useStyles({ rotate });

  return (
    <ExpandMoreIcon className={clsx(classes.root, className)} {...props} />
  );
}

export default CustomExpandMoreIcon;
