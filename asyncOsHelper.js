const https = require('https');

let start = Date.now();

function doRequest() {
    https.request('https://google.com', res => {
        res.on('data', () => {})
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    }).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
