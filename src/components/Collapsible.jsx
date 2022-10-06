import { Box, Collapse, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import CustomExpandMoreIcon from './CustomExpandMoreIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  innerBox: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    padding: theme.spacing(1.5),
    cursor: 'pointer',
  },
  component: {
    width: '100%',
  },
}));

function Collapsible({ component, className, children, ...props }) {
  const classes = useStyles();
  const [collapsedIn, setcollapsedIn] = useState(true);

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <Box
        className={classes.innerBox}
        onClick={() => {
          setcollapsedIn(!collapsedIn);
        }}
      >
        <Box className={classes.component}>{component}</Box>
        <CustomExpandMoreIcon rotate={!collapsedIn ? 180 : 0} />
      </Box>
      <Collapse style={{ minHeight: 'max-content' }} in={!collapsedIn}>
        {children}
      </Collapse>
    </Box>
  );
}

export default Collapsible;
