import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    '& > *': { padding: theme.spacing(1.5) },
  },
  pre: {
    '& > code': {
      counterIncrement: 'listing',
      display: 'block',
    },
    '& > code::before': {
      content: 'counter(listing)',
      width: '2rem',
      display: 'inline-block',
      textAlign: 'left',
    },
  },
}));

const Color = ({ color, children, ...props }) => {
  const colors = {
    violet: '#a097d1',
    green: '#7cac70',
    white: '#ffffff',
    orange: '#c2a460',
    pink: '#b56f8d',
    blue: '#a0e5e9',
  };

  return (
    <span style={{ color: colors[color] }} {...props}>
      {children}
    </span>
  );
};

function EditorSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <pre className={classes.pre}>
        <code>-- learn more on https://docs.project.co/guides/tables/</code>
        <code></code>
        <code>
          <Color color="violet">--js</Color> <Color color="green">type</Color>(
          <Color color="blue">&apos;table&apos;</Color>)
        </code>
        <code></code>
        <code>
          <Color color="violet">SELECT</Color> country as country,
        </code>
        <code>
          {'       '}device_type{'    '} <Color color="violet">as</Color>{' '}
          device_type,
        </code>
        <code>
          {'       '}
          <Color color="green">sum</Color>(revenue){'    '}
          <Color color="violet">as</Color> revenue,
        </code>
        <code>
          {'       '}
          <Color color="green">sum</Color> (sessions){'  '}
          <Color color="violet">as</Color> sessions,
        </code>
        <code>
          {'       '}
          <Color color="green">sum</Color> (pageviews){' '}
          <Color color="violet">as</Color> pageviews,
        </code>
        <code>
          <Color color="violet">FROM</Color> my_table
        </code>
        <code>
          <Color color="violet">WHERE</Color>{' '}
          <Color color="white">country =</Color>{' '}
          <Color color="orange">&apos;FRANCE&apos;</Color>
        </code>
        <code>
          <Color color="violet">GROUP</Color> <Color color="white">BY</Color>{' '}
          <Color color="pink">1</Color>, <Color color="pink">2</Color>
        </code>
      </pre>
    </Box>
  );
}

export default EditorSection;
