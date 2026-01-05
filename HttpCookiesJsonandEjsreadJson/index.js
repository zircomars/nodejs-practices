/*https://www.geeksforgeeks.org/http-cookies-in-node-js/
https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

*/

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

//setup express app 
const app = express();

app.use(cookieParser());

/* (app.locals.x) on oletuksena kuin objekti ominaisuus mitäkin vastaa, sen jälkeen luodaan joku x-nimi/tekijä mitä itse tietää ja yhtä suuri kuin joku polku json tiedoston.
Tässä tarkoituksena, että http sivusto avaa määrittyn ominaisuuden json tiedostostosta mitä html - taulukko/asia määrittyy sinne
*/
//app.locals.points =  "123, 80"; // html.index lisäät bodyn sisään >> <p><%= points %></p>--> 
app.locals.classData = require('./file/videodatat.json');
app.locals.classScedule = require('./file/class.json');


//Static files & lukaisee muu kansion ja nimen
app.use('/js', express.static((__dirname + 'static/js'))); //javascript

//EJS Engine & ensimmäinen sivu
app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
  res.render('index')
  console.log("index.ejs");
});

//JSON file & mielellään kirjoittaa tarkuudella, ei yhteen pötköön, koska millo päättyy aaltosulku { } tai tavallinen sulku () , pilkku ja jne..
let users = 
{
name : "Tantta", 
Age : "24",
country: "Finland",
city : "Helsinki",
  work : 
  {
    school: "Hamk",
    subject: "it"
  },
      hobby : 
    {
      gym: "Full body",
      drama: "CIA & Bones",
      music: " Rock Metal Gaming Music"
    }
}



//////////////////////////////////////////////////////
//basic homepage
/*
app.get('/', (req, res)=>{ 
res.send('This is a home page'); 
}); */

//setuser & getuser & delete it
//Route for adding cookie 
app.get('/setuser', (req, res)=>{ 
  res.cookie("userData", users);  
  res.send('user data added to cookie'); 

}); 

//Iterate users data from cookie 
app.get('/getuser', (req, res)=>{ 
//shows all the cookies 
  res.send(req.cookies);
}); 

//avaa toisen polkun sivun ja lukee polkun olemassa olevan tiedoston
app.get("/private", (req, res) => {
  res.sendFile(path.join(__dirname, './file', 'class.json'));
  console.log("class");
});

//delete cookies & sen määritty json luettelo
app.get('/logout', (req,res )=> {
  res.clearCookie("userData", users);
  return res.status(200).redirect('/login');
});

////////////////////////////////////////////////
let accounts = [
  {
    "id": 1,
    "username": "John",
    "role": "admin"
  },
  {
    "id": 2,
    "username": "Mike",
    "role": "guest"
  },
  {
    "id": 3,
    "username": "Sara",
    "role": "guest"
  }
];

//lukaisee ylemmän let accounts määritettyn json muotoisen formaatin
app.get('/accounts', (req,res) => {
  res.json(accounts);
});

//lukaisee ylemmän let account määritetttyn json muuodon & polkuun lisää kautta id numeron mukaan, mikäli on olemssa
app.get('/accounts/:id', (req, res) => {
  const accountId = Number(req.params.id);
  const getAccount = accounts.find((account) => account.id === accountId);

  if (!getAccount) {
    res.status(500).send('Account not found.')
  } else {
    res.json(getAccount);
  }
});

///////////////////////////////////////////
//määritetty portti luku 
app.listen(8080, (err)=>{ 
if(err) 
throw err; 
console.log('listening on port 8080'); 
}); 