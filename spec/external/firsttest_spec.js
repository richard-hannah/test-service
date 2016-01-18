var frisby = require('frisby');

frisby.globalSetup({ // globalSetup is for ALL requests
    request: {
        headers: { "Authorization": "Basic M3YwNmk6QUJDMTIz", "Content-type": "application/json"}
    },
    timeout: 20000

});


var URL = 'http://sandbox.evogihub.com/';


frisby.create('get options on accounts end-point')
    .get(URL + "state/accounts")
    .expectStatus(200)
    .toss()

