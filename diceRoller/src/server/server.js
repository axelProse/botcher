// npm run dev-server // This now also runs the mock server for data
// npm run dev-bundle

import express from 'express';
// The below imports were utilized for SSR; removing for now as it's complicating the react-router work.  
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.get('/*', (req, res) => {
  //const initialMarkup = ReactDOMServer.renderToString(<App />); // More SSR code commented out.  

  res.send(`
    <html>
      <head>
        <title>Botcher</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log('Server is running...'));
