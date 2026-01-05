//Pää sovellus

const express = require('express');
const app =  express();
const path = require('path'); //avaa sivuston polkun

const nodemailer = require("nodemailer");

//static olemassa HTML sivut
app.use('/public', express.static(path.join(__dirname, 'static')));

//Static files & lukaisee muu kansion ja nimen
app.use('/js', express.static((__dirname + 'static/js'))); 

//static/css tai js
app.use(express.static('static'));
//json tiedosto
app.use(express.json());

const PORT = process.env.PORT || 5050;

//Homepage
app.get('/', (req, res) => 
{
  res.sendFile(path.join(__dirname, 'static' , '/index.html'));
  console.log("Kotisivu");
})

//vastaanottaa kotisivuston viestin mitä sieltä tulee olemaan
app.post('/', (req, res) => {
  console.log(req.body);

  /*
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '',
        pass: ''
      }
  })

  //lähettäjä mitä palauteessa saadaan sitä
  const mailOptions = {
    from: req.body.email,
    to: 'zhao-96@hotmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
          console.log(error);
          res.send('error');
    } else {
        console.log('Email send: ' + info.response);
        res.send('success');
    }
  })*/


}) //app.post end here

//Toinen sivu
app.get('/about', (req,res) => {
  res.sendFile(path.join(__dirname, 'static' , '/about.html'));
  console.log("About sivu");
})


app.listen(PORT, () => {
  console.log(`Serveri käynnistyy...  ${PORT}`);
})