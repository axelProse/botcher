import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core'
import { App } from './components/App.js';
import theme from './theme.js'

const commonTheme = theme;

ReactDOM.hydrate(
  <>
    <MuiThemeProvider theme={commonTheme}>
      <App />
    </MuiThemeProvider>
  </>,
  document.getElementById('root'),
);
