import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
// import CharacterInfo from './components/CharacterInfo';

ReactDOM.hydrate(
  <>
    <App />
    {/* <CharacterInfo /> */}
  </>,
  document.getElementById('mountNode'),
);
