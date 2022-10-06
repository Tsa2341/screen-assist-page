import {
  Box,
  Button,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CustomExpandMoreIcon from './CustomExpandMoreIcon';

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: '120px',
  },
  menuText: {
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
  },
  menuList: {
    minWidth: '120px',
  },
  iconContainer: {
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function CustomMenu({ title, items, className, ...props }) {
  const [name, setname] = useState(title);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Box>
      <Button
        className={clsx(classes.button, className)}
        variant="text"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
        {...props}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          wrap="nowrap"
        >
          <Typography className={classes.menuText}>{name}</Typography>
          <CustomExpandMoreIcon />
        </Grid>
      </Button>

      <Menu
        MenuListProps={{ className: classes.menuList }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {items.map(({ key, value }) => (
          <MenuItem
            key={key}
            onClick={() => {
              setname(value);
              handleClose();
            }}
          >
            {value}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

CustomMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

export default CustomMenu;
