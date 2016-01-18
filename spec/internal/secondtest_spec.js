var frisby = require('frisby');

frisby.globalSetup({ // globalSetup is for ALL requests
    request: {
        headers: { "Authorization": "Basic M3YwNmk6QUJDMTIz", "Content-type": "application/json"}
    }
});


var URL = 'http://localhost:8081';


frisby.create('get test endpoint')
    .get(URL + "/hello")
    .expectStatus(200)
    .toss()

