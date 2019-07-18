import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import App from './components/App.js';
import theme from './theme.js'

const commonTheme = theme;

ReactDOM.hydrate(
  <>
    <MuiThemeProvider theme={commonTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </>,
  document.getElementById('root'),
);
