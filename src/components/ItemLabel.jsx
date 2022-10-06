import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import labelColors from '../utils/labelColors';

const useStyles = makeStyles((theme) => ({
  root: ({ color }) => {
    return {
      backgroundColor: color,
      borderRadius: '0.75rem',
      padding: `${theme.spacing(0.3)}px ${theme.spacing(1)}px`,
      textAlign: 'center',
      color: 'white',
    };
  },
}));

function ItemLabel({ children, className, ...props }) {
  const classes = useStyles({
    color: labelColors[children.toLowerCase()] || labelColors.config,
  });

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      {children.trim()}
    </Box>
  );
}

export default ItemLabel;
