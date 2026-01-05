/* ohjeet löytyvät ja jotakin vinkkiä:: 
https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files

https://expressjs.com/en/guide/routing.html

Tässä linkissä on n. 5 tehtävää, mutta tehty 4 asti, melko tähän asti kuitenkin


https://stackoverflow.com/questions/14160025/routes-folder-in-express/14160264

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

https://codezup.com/create-separate-route-file-node-js-mean-stack/

https://medium.com/swlh/node-js-router-and-routes-a4a3cfced5c4

https://technotip.com/3770/basic-routing-using-express-node-js/

*/

//Tämä on pääsovellus
// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//loading node's file systems
const fs = require('fs');

//configure our express instance with some body-parser settings
//including handling JSON datas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//consider routes path folder/files, it will set to default home page
const routes = require('./routes/routes.js')(app, fs);

//set server running and port number
const server = app.listen(8080, () => {
  console.log('Server is running %s...', server.address().port);
});

