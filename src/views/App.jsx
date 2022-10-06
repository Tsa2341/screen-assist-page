import { Box, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import FileSection from '../components/FileSection';
import MainLowerSection from '../components/MainLowerSection';
import MainUpperSection from '../components/MainUpperSection';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'var(--bg-default)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    position: 'relative',
  },
  main: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'min-content 0.5fr 0.5fr',
    gridTemplateColumns: 'auto minmax(0, 1fr)',
  },
  navBarBox: {
    gridColumn: '1 / span 2',
    gridRow: 1,
    minHeight: 0,
  },
  fileSectionBox: {
    gridColumn: 1,
    gridRow: '2 / span 2',
    minHeight: 0,
  },
  mainUpperBox: {
    gridColumn: 2,
    gridRow: 2,
    minHeight: 0,
  },
  mainLowerBox: {
    gridColumn: 2,
    gridRow: 3,
    minHeight: 0,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <SideBar />
      <Box className={classes.main}>
        <Box className={classes.navBarBox}>
          <NavBar />
        </Box>
        <Box className={classes.fileSectionBox}>
          <FileSection />
        </Box>
        <Box className={classes.mainUpperBox}>
          <MainUpperSection />
        </Box>
        <Box className={classes.mainLowerBox}>
          <MainLowerSection />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
