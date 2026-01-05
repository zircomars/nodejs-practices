var express = require('express')
var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))

app.listen(3000)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/success', function (req, res) {
  res.sendFile(__dirname + '/success.html')
})

app.post('/register', function (req, res) {
  console.log(req.body)
  res.redirect('/success')
})