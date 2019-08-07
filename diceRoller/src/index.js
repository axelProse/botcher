import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./redux/configureStore"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import App from './components/App.js';
import theme from './theme.js'

const commonTheme = theme;
const store = configureStore();

ReactDOM.render(  // Replace .render with .hydrate to basically switch this back to SSR (plus make changes to server.js)
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={commonTheme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </ReduxProvider>,
  document.getElementById('root'),
);
