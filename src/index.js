import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './views/App';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(84, 124, 215, 1)',
    },
    secondary: {
      main: 'rgba(192, 202, 212, 1)',
      dark: 'rgba(114, 126, 138, 1)',
    },
    common: {
      white: 'rgba(251, 255, 255, 1)',
      black: 'rgba(118, 127, 135, 1)',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontVariant: 'none',
        fontVariantCaps: 'normal',
        color: 'rgba(192, 202, 212, 1)',
      },
    },
    MuiMenuItem: {
      root: {
        color: 'black',
      },
    },
    MuiIconButton: {
      root: {
        margin: 0,
        padding: 0,
      },
    },
    MuiIcon: {
      root: {
        fontSize: '1.5rem',
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: '1.5rem',
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    allVariants: {
      color: 'rgba(192, 202, 212, 1)',
      margin: 0,
      wordBreak: 'keep-all',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    fontSize: 11,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
