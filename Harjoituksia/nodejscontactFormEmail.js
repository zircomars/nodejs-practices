/*ohjeet ja tutoriaalit::
https://www.youtube.com/watch?v=30VeUWxZjS8

Sähköposti homma, mitä käyttäjä kuin lähettää palaute viesti tai tavallinen viesti toiminta, että viesti menee määrittyyn lähettäjälle. 

Toiminassa, kuin perus palaute formaatissa, että kirjoittaa nimi, oman, sposti, aihe ja viestin. Mikäli on valmis, ponnahtaa ilmoitus, että viesti on lähdössä eteenpäin tai onnistunut/hyväksynyt

*/

const express = require('express');
const app = express();
const port = 5000;

const nodemailer = require("nodemailer");
 
//https://cyberhungrydesktopenvironment.zhaotan18x.repl.co/

//middleware and consider folder path, also read all folder inside of the "public" folder, this is as head of folder or main 
app.use(express.static("public"));
app.use(express.json());

//default home page
app.get('/', (req, res) => {
  res.sendfile(__dirname + 'public/contact/index.html')
});

//receive user inputs and others
app.post('/', (req, res) => {
  console.log(req.body); //receive user inputs

  //email to user
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: '<user_email@hotmail.com>',
      pass: '<user-emailPassword>'
    }
  });

  //html form sent to right user and real person
  const mailOptions = {
    from: req.body.email,
    to: 'wan18x@outlook.com',
    subject: `Message from ${req.body.email}, ${req.body.subject}`,
    text: req.body.Message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
        res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('sucess');
    }
  });

});

app.listen(port, () => {
  console.log(`The server is running... ${port}`);
});
