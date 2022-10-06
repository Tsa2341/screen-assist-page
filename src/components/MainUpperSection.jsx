import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React from 'react';
import Collapsible from './Collapsible';
import EditorSection from './EditorSection';
import ItemLabel from './ItemLabel';
import TabView from './TabView';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    background: 'var(--bg-main)',
  },
  innerBox1: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    borderRight: `0.5px solid ${theme.palette.secondary.main}`,
  },
  innerBox1Header: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: theme.spacing(1.5),
    gap: theme.spacing(1),
    alignItems: 'center',
    borderBottom: `0.5px solid ${theme.palette.secondary.main}`,
    '& > *:last-child': {
      marginLeft: 'auto',
    },
  },
  innerBox1EditorPage: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  innerBox2: {
    maxWidth: '250px',
    width: '100%',
    height: '100%',
    padding: `${theme.spacing(1.5)}px 0`,
  },
  tab1InfoText: {
    color: 'var(--info)',
    padding: theme.spacing(1),
    alignItems: 'center',
  },
  file: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    '& > *:last-child': {
      marginLeft: 'auto',
    },
  },
  collapsible1: {
    borderTop: `1px solid ${theme.palette.secondary.main}`,
  },
  collapsible1ChildrensBox: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: `0 ${theme.spacing(1.5)}px`,
  },
  collapsible1Component: {
    width: '100%',
    display: 'Flex',
    flexFlow: 'row nowrap',
    gap: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  collapsible1ComponentIcon: {
    padding: `0 ${theme.spacing(0.5)}px`,
    background: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    color: 'black',
  },
}));

function MainUpperSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.innerBox1}>
        <Box className={classes.innerBox1Header}>
          <Typography>
            definitions/1_simple_examples/dataset_2_with_ref.sql
          </Typography>
          <Button variant="contained" color="secondary">
            Save
          </Button>
        </Box>
        <Box className={classes.innerBox1EditorPage}>
          <EditorSection />
        </Box>
      </Box>
      <Box className={classes.innerBox2}>
        <TabView tabs={['Outline', 'Documentation']}>
          <Box>
            <Typography className={classes.tab1InfoText}>
              No compilation issue
            </Typography>
            <Box className={classes.file}>
              <ItemLabel>table</ItemLabel>
              <Typography>dataset_2_with_ref</Typography>
              <MoreHoriz />
            </Box>
            <Collapsible
              className={classes.collapsible1}
              component={
                <Box className={classes.collapsible1Component}>
                  <Typography>Dependencies</Typography>
                  <Box className={classes.collapsible1ComponentIcon}>3</Box>
                </Box>
              }
            />
            <Collapsible
              className={classes.collapsible1}
              component={<Typography>Complied</Typography>}
            />
            <Collapsible
              className={classes.collapsible1}
              component={<Typography>Query</Typography>}
            >
              <Box className={classes.collapsible1ChildrensBox}>
                <Button variant="contained" color="secondary">
                  Execute query
                </Button>
                <Button variant="contained" color="primary">
                  Run this code
                </Button>
              </Box>
            </Collapsible>
          </Box>
        </TabView>
      </Box>
    </Box>
  );
}

export default MainUpperSection;
