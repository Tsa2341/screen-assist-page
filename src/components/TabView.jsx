import { AppBar, Box, makeStyles, Tab, Tabs } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    gap: theme.spacing(1),
  },
  appBar: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
    padding: `0 ${theme.spacing(1.5)}px`,
  },
  tab: {
    minWidth: '50%',
  },
  tabPanel: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
}));

const TabPanel = ({ child, value, index, className, ...props }) => {
  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.tabPanel, className)}
      {...props}
      key={index}
      hidden={value !== index}
    >
      {value === index && child}
    </Box>
  );
};

function TabView({ tabs, children, className, ...props }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <AppBar className={classes.appBar} position="static">
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab, index) => {
            return <Tab className={classes.tab} label={tab} key={index} />;
          })}
        </Tabs>
      </AppBar>
      {!children.length ? (
        <TabPanel child={children} value={value} index={0} />
      ) : (
        children.map((tabPanel, index) => {
          return (
            <TabPanel
              key={index}
              child={tabPanel}
              value={value}
              index={index}
            />
          );
        })
      )}
    </Box>
  );
}

export default TabView;
