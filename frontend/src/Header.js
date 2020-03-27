import React from 'react';

export default function Header(props) {
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
         
        // <script charset='UTF-8'>
        // window['adrum-start-time'] = new Date().getTime();
        // (function(config){
        //     config.appKey = 'AD-AAB-AAV-THC';
        //     config.adrumExtUrlHttp = 'http://cdn.appdynamics.com';
        //     config.adrumExtUrlHttps = 'https://cdn.appdynamics.com';
        //     config.beaconUrlHttp = 'http://col.eum-appdynamics.com';
        //     config.beaconUrlHttps = 'https://col.eum-appdynamics.com';
        //     config.xd = {enable : true};
        //     config.spa = {
        //      "spa2": true
        //      }; 
        // })(window['adrum-config'] || (window['adrum-config'] = {}));
        // </script>
        // <script src='//cdn.appdynamics.com/adrum/adrum-latest.js'></script>
    );
}

