/* ohjeet: https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters


esimerkki polkuun syötät jotakin;
http://example.com/api/users?id=4&token=sdfa3&geo=us

>>>> Nämä vaiheet perustuu alemman metodi määritykseen <<<<
1) toistaa ton 123 luvun;
http://localhost:8080/api/123


2)toistaa nimen(sammy), että sivussa näkyy "Hello Sammy";;
http://localhost:8080/api/users/sammy

*/

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes will go here
app.get('/api/users', function(req, res) {
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});

//1) http://localhost:8080/api/123

app.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

app.param('name', function(req, res, next, name) {
  const modified = name.toUpperCase();

  req.name = modified;
  next();
});

//2)http://localhost:8080/api/users/Michael, webpage:: Hello Michael!
app.get('/api/users/:name', function(req, res) {
  res.send('Hello ' + req.name + '!');
});


app.listen(port);
console.log('Server started at http://localhost:' + port);
