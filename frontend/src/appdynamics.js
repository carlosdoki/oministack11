
        window['adrum-start-time'] = new Date().getTime();
        (function(config){
            config.appKey = 'AD-AAB-AAV-THC';
            config.adrumExtUrlHttp = 'http://cdn.appdynamics.com';
            config.adrumExtUrlHttps = 'https://cdn.appdynamics.com';
            config.beaconUrlHttp = 'http://col.eum-appdynamics.com';
            config.beaconUrlHttps = 'https://col.eum-appdynamics.com';
            config.xd = {enable : true};
            config.spa = {
             "spa2": true
             }; 
        })(window['adrum-config'] || (window['adrum-config'] = {}));
