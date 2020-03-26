const express = require('express');
const routes = require('./routes');

require("appdynamics").profile({
    controllerHostName: '169.48.106.35',
    controllerPort: 8090, 
    controllerSslEnabled: false,  // Set to true if controllerPort is SSL
    accountName: 'customer1',
    accountAccessKey: '684c8100-1059-4000-ab68-60b7eea671a8', //required
    applicationName: 'OmniStack11',
    tierName: 'Backend', 
    nodeName: 'Node' 
   });
const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);