import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import DropDownConnector from './DropDownConnector';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto minmax(0, 1fr)',
    gridTemplateRows: 'auto',
    alignItems: 'center',
  },
  connectorBox: {
    gridColumn: 1,
    gridRow: 1,
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '100%',
  },
  connector: {
    gridColumn: 1,
    gridRow: 1,
    height: '100%',
  },
  children: {
    gridColumn: 2,
    gridRow: 1,
  },
}));

function ChildDropDownItem({ children, className, levels, ...props }) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <Box className={classes.connectorBox}>
        {Array.from(Array(levels)).map((_, index) => (
          <Box className={classes.connectorBox} key={index}>
            <DropDownConnector />
          </Box>
        ))}
      </Box>

      <Box className={classes.children}>{children}</Box>
    </Box>
  );
}

export default ChildDropDownItem;
