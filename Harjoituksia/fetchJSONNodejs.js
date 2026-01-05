//fetch on alemmassa, mitä näyttää console/cmd kommentoon paremman näköisen json tiedoston, kuin yhteen pötköön kirjoitettu

///////////////////////////////////////////
/* //Testaus:
https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
https://www.youtube.com/watch?v=1tVCwv_BX2M

*/
let users = 
{
file: "users",
name : "UserName", 
Age : "18",
country: "Finland",
city : "Vantaa",
  work : 
  {
    school: "University",
    subject: "engineer"
  },
      hobby : 
    {
      gym: "Full body",
      drama: "CIA",
      music: "Rock band"
    }
}

const fetch = require('node-fetch');

/*
let todo = {
    userId: 123,
    title: "loren impsum doloris",
    completed: false
};*/

//JSON tiedoston säätely, että näyttää paljon järkevämmältä, EI yhteen pötköön 
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(users),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json));

/*output::
{
  file: 'users',
  name: 'UserName',
  Age: '18',
  country: 'Finland',
  city: 'Vantaa',
  work: { school: 'University', subject: 'engineer' },
  hobby: { gym: 'Full body', drama: 'CIA', music: 'Rock band' },
  id: 201
}
*/

////////////////////////////////////////////////

//Toinen esimerkki
//https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
/*
const fetch2 = require('node-fetch');

let todo = {
    userId: 123,
    title: "loren impsum doloris",
    completed: false
};

fetch2('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
*/
////////////////////////////////////////////////

//Kolmas esimerkki
//kirjoitettaan json file toi student tietokanta juttu
/*tos on kaksi erikoista, null, 2 kanssa määrittyy json rivit, että näyttää järkevämmältä kuin yhteen pötköön kirjoitettu ne rivit
 */

'use strict';

const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    //car: 'Honda' 
};
 
let data = JSON.stringify(student, null, 2);
fs.writeFileSync('student-2.json', data);
console.log("saved");


////////////////////////////////////////////////
/*
http.createServer((request, response) => {
  const chunks = [];
  request.on('data_class2.json', chunk => chunks.push(chunk));
  request.on('end', () => {
    const data = Buffer.concat(chunks);
    console.log('Data: ');
  })
}).listen(8080)
*/
