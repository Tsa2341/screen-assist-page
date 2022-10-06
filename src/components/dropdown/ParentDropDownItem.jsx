import { Box, Collapse, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import CustomExpandMoreIcon from '../CustomExpandMoreIcon';
import DropDownConnector from './DropDownConnector';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto auto minmax(0, 1fr)',
    gridTemplateRows: 'auto',
    alignItems: 'center',
    cursor: 'pointer',
  },
  connector: {
    gridColumn: 1,
    gridRow: 1,
    height: '100%',
  },
  expandMoreIcon: {
    gridColumn: 2,
    gridRow: 1,
    width: '16px',
    height: '16px',
  },
  nameBox: {
    gridColumn: 3,
    gridRow: 1,
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
}));

function ParentDropDownItem({
  levels = 0,
  name,
  children,
  className,
  ...props
}) {
  const classes = useStyles();
  const [collapsedIn, setcollapsedIn] = useState(true);
  const newLevel = levels + 1;

  // copy all the childrens and add the levels prop on them
  const copiedChildrens =
    children && children.length ? Array.from(children) : [{ ...children }];
  const modifiedChildrens = copiedChildrens.map((child) => {
    const { props } = child;
    return { ...child, props: { ...props, levels: newLevel } };
  });

  return (
    <>
      <Box
        className={clsx(classes.root, className)}
        {...props}
        onClick={() => {
          setcollapsedIn(!collapsedIn);
        }}
      >
        <Box className={classes.connector}>
          {Array.from(Array(levels)).map((_, index) => (
            <DropDownConnector key={index} />
          ))}
        </Box>

        <Box className={classes.expandMoreIcon}>
          <CustomExpandMoreIcon rotate={collapsedIn ? -90 : 0} />
        </Box>

        <Box className={classes.nameBox}>{name}</Box>
      </Box>

      <Collapse style={{ minHeight: 'max-content' }} in={!collapsedIn}>
        {children &&
          (children.length ? modifiedChildrens : modifiedChildrens[0])}
      </Collapse>
    </>
  );
}

export default ParentDropDownItem;
