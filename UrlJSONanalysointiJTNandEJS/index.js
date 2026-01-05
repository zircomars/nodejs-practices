/* CRASH COURSE__::

GET, POST, DELETE request

>>> request type <<<
localhsot:8080/index.html         - GET
localhsot:8080/index.html/about   - GET
localhsot:8080/index.html         - POST

localhsot:8080/index.html/:id     - GET
localhsot:8080/index.html/:id     - DELETE
localhsot:8080/index.html/:index  - PUT

*/ 

const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require("body-parser");

//const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


//Lukaisee kokonaisen json tiedoston & määritettynä url kautta
/*https://www.youtube.com/watch?v=YCPiIrkkdUg
request({
  url: "https://jsonplaceholder.typicode.com/posts",
  json: true
}, (err, response, body) => {
  //console.log(JSON.stringify(body, undefined, 15));
  //console.log(body);
});
*/


//static files / folder
//app.use('/public', express.static(path.join(__dirname, 'static')));

//Static files & lukaisee muu kansion ja nimen
//app.use('/js', express.static((__dirname + 'static/js'))); //javascript

//Home 
/*
app.get('/', (req,res)=> {
  //res.send('Ihme maailma');
  res.sendFile(path.join(__dirname, 'static' , '/index.html'));
  console.log("Home");
});*/
//////////////////////////////////////////////

//EJS 
app.set('view engine', 'ejs');

//static folder & public
app.use(express.static('./public'));

//Kotisivu index.ejs
app.get('/', (req, res) => {
  res.render('index')
  console.log('Home')
  
});

//about
app.get('/about', (req,res)=> {
  //res.send('Ihme maailma');
  res.render('/about')
  console.log("About");
});

//////////////////////////////////////////////

app.listen(8080);