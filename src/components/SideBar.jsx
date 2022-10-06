import { Avatar, Box, Divider, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import TuneIcon from '@material-ui/icons/Tune';
import React from 'react';
import CustomIconButton from './CustomIconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'var(--bg-sidebar)',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'start',
    justifyContent: 'start',
    height: '100%',
    width: 'max-content',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  innerBox: {
    gap: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'space-between',
    justifyContent: 'start',
    height: '100%',
    '& > *': {
      gap: theme.spacing(2),
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'space-between',
      justifyContent: 'start',
    },
  },
  iconsBox: {
    height: '100%',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  divider: {
    backgroundColor: theme.palette.common.black,
    margin: `0 ${theme.spacing(0.5)}px 0 ${theme.spacing(0.5)}px`,
  },
}));

function SideBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CustomIconButton>
        <RadioButtonCheckedIcon />
      </CustomIconButton>
      <Divider />

      <Box className={classes.innerBox}>
        <Box className={classes.iconsBox}>
          <CustomIconButton>
            <RadioButtonCheckedIcon />
          </CustomIconButton>
          <CustomIconButton>
            <RadioButtonCheckedIcon />
          </CustomIconButton>
          <CustomIconButton>
            <RadioButtonCheckedIcon />
          </CustomIconButton>
          <Divider className={classes.divider} orientation="horizontal" />
          <CustomIconButton>
            <RadioButtonCheckedIcon />
          </CustomIconButton>
          <CustomIconButton>
            <RadioButtonCheckedIcon />
          </CustomIconButton>
          <CustomIconButton>
            <RadioButtonCheckedIcon />
          </CustomIconButton>
          <Divider className={classes.divider} orientation="horizontal" />
          <CustomIconButton>
            <KeyboardArrowRightIcon />
          </CustomIconButton>
        </Box>

        <Divider />

        <Box>
          <CustomIconButton>
            <TuneIcon />
          </CustomIconButton>
          <CustomIconButton>
            <Avatar className={classes.avatar} />
          </CustomIconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
