import {
  Box,
  Button,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import clsx from 'clsx';
import React from 'react';
import CustomIconButton from './CustomIconButton';
import CustomMenu from './CustomMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'min-content',
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: theme.spacing(1),
    padding: theme.spacing(1.5),
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > *': {
      display: 'flex',
      flexFlow: 'row nowrap',
      gap: theme.spacing(1),
    },
  },
  menu2Container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.borderRadius,
  },
  menu2Divider: {
    backgroundColor: theme.palette.secondary.main,
  },
  menu2Icon: {
    margin: `0 ${theme.spacing(1)}px 0 ${theme.spacing(1)}px`,
  },
  commitButtonIcon: {
    fontSize: '0.75rem',
    fill: theme.palette.common.white,
  },
  panelControlIcon: {
    fontSize: '1.3rem',
    fill: theme.palette.secondary.main,
  },
  commitButtonText: {
    marginLeft: theme.spacing(1),
  },
}));

function NavBar({ className, ...props }) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <Box>
        <CustomMenu
          title="Project Name"
          items={[
            { key: 'key 1', value: 'value 1' },
            { key: 'key 2', value: 'value 2' },
            { key: 'key 3', value: 'value 3' },
          ]}
        />

        <Box className={classes.menu2Container}>
          <CustomMenu
            title="Development"
            items={[
              { key: 'key 1', value: 'value 1' },
              { key: 'key 2', value: 'value 2' },
              { key: 'key 3', value: 'value 3' },
            ]}
          />
          <Divider
            className={classes.menu2Divider}
            orientation="vertical"
            variant="fullWidth"
          />
          <CustomIconButton color="secondary" className={classes.menu2Icon}>
            <MoreHorizIcon />
          </CustomIconButton>
        </Box>

        <Button variant="contained" color="primary">
          <RadioButtonCheckedIcon className={classes.commitButtonIcon} />
          <Typography className={classes.commitButtonText}>
            Commit (2 files)
          </Typography>
        </Button>
      </Box>
      <Box>
        {Array.from(Array(3)).map((value, i) => (
          <RadioButtonCheckedIcon
            className={classes.panelControlIcon}
            key={i}
          />
        ))}
      </Box>
    </Box>
  );
}

export default NavBar;
