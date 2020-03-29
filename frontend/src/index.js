import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var appd = require('appdynamics');

appd.profile({
  controllerHostName: '169.48.106.35',
  controllerPort: 8090, 
  controllerSslEnabled: false,  // Set to true if controllerPort is SSL
  accountName: 'customer1',
  accountAccessKey: '684c8100-1059-4000-ab68-60b7eea671a8', //required
  applicationName: 'OmniStack11',
  tierName: 'Front-end', 
  nodeName: 'Node1' 
 });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

