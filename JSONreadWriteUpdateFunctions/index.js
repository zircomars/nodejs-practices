/*
ohjeet ja jotakin tutoriaalit, mistä voi olla apua yms:::

https://heynode.com/tutorial/readwrite-json-files-nodejs/

https://attacomsian.com/blog/nodejs-write-json-object-to-file

https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/

//pieni tutoriaali & tärkeä!!
https://zetcode.com/javascript/jsonparse/


Read/Write JSON Files with Node.js
https://www.youtube.com/watch?v=HrjC6RwEpt0

https://www.codegrepper.com/code-examples/javascript/choose+a+random+word+from+an+array+json+javascript (DONE)

//pieni for loop , että toistaa kaikki JSON sisäisen app - nimet
https://stackoverflow.com/questions/44996784/how-to-get-value-from-json-with-random-id/44996920 (DONE)

https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json/19589912 (DONE)

https://pretagteam.com/question/javascript-loop-through-json-array (DONE)

*/

/*TODO:: Johdanto selitys;;;;;;;
Tässä kaikki json , javascript ja yms toiminnat menevät "parse" - suomeksi: jäsentää.
JSON.parse methodi on JSON stringi, rakenne javascriptin luku/teksti tai objektin kuvatuun tekijään. Valinnainen elvytystoiminto voidaan tarjota muunnoksen suorittamiseksi tuloksena olevalle objektille ennen sen palauttamista. 

Myös tähän vaikuttaa, että lukaistaan tiedoston polkua, että ei liitettä kaikkia komentoa/käskyä ja koodia yhteen pötköön. Polkun lukemisessa pitää määrittää methodi/parametri, voi olla monipuolista strategiaa, jotta pelittäisi.
 */

//TODO 1-esimerkki:: START HERE
const fs = require("fs");

//perus yrittää lukaista json tiedoston formaatin, ja sisäisen objektin / syvemmän yksityiskohdan
try {
  //read exist file and name the object
  const jsonString = fs.readFileSync("./customer.json", "utf-8");
  const customer = JSON.parse(jsonString);
  console.log("This is customer.json")

  //TODO:: output json objects
  console.log(customer.country.city[1]);

  const fileCity = customer.country.city[[Math.floor(Math.random() * customer.country.city.length)]];

  console.log("Suomen kaupunki: " + fileCity);
}
catch (err) {
  console.log(err);
}


//TODO 2-esimerkki:: START HERE
//uusi objekti
const newObject =
{
  name: 'Newbie Corp',
  id_count: 123,
  address: 'Some Road Way',
  city: 'LA',
  phones: {
    office: "office num: 464-676-4539",
    user: {
      home: "home num: 168-594-4511",
      mobile: "mobile: +000 123-456-7890"
    },

    fax: "fax num: 0147-8520-963"
  },

  company: {
    name: 'XY company',
    country: {
      name: 'US',
      city: [["NY"], ["Vegas"], ["Texas"], ["Los Angeles"], ["Miami"], ["Washington"], ["New Orleans"], ["Chicago"], ["Boston"], ["Houston"], ["Seattle"], ["Austin"], ["Dallas"], ["Denver"], ["Nashville"], ["Atlanta"] , ["Springfield"] ]
    }
  }

}; //newObject ENDS HERE

//käsittelee tuota toista json dataa (newObject) jokaista objektia erikseen
const jsonString2 = JSON.stringify(newObject);
const jsonString2Parse = JSON.parse(jsonString2);
console.log("\n \nsecond object parameters:: \n" + jsonString2Parse.address);

//output officen number
console.log('Käyttäjän puhelin: ' + jsonString2Parse.phones.user.mobile);
console.log(jsonString2Parse.city);

//toistaa tämän objektin sisäisen yrityksen kohteen maan nimen eli us ja yhteistiedon yrtyksen sijainnissa mm. vegas, LA, miami ja jne
//console.log('\nToinen yritys sijaitsee: ' + jsonString2Parse.company.country.name + ' , ' + jsonString2Parse.company.country.city);


//testi for loop + random
for (let ranCityName = 0; ranCityName < 3; ranCityName++) {
  const randomCity2 = jsonString2Parse.company.country.city[Math.floor(Math.random() * jsonString2Parse.company.country.city.length)];

  console.log("\nKaupunki: " + randomCity2)
}

//TODO 3- esimerkki:: START HERE

/*
const appSoft = [
  {
    "user": "user1",
    "id": 1,
    "username": "cdegoey0",
    "file": "MaurisUllamcorper.mp3",
    "App": "Treeflex"
  }, 

  { 
    "user": "user2",
    "id": 2,
    "username": "akleinbaum1",
    "file": "FelisUtAt.xls",
    "App": "Flowdesk"
  }, 

  {
    "user": "user3",
    "id": 3,
    "username": "lbrighty2",
    "file": "RhoncusAliquam.mp3",
    "App": "Tempsoft"
  }, 

  {
    "user": "user4",
    "id": 4,
    "username": "crotlauf3",
    "file": "NullaUltrices.xls",
    "App": "Bigtax"
  }, 

  {
    "user": "user5",
    "id": 5,
    "username": "vhawford4",
    "file": "CongueEtiamJusto.avi",
    "App": "Konklux"
  }, 

  {
    "user": "user6",
    "id": 6,
    "username": "jblackeby5",
    "file": "EuMassa.avi",
    "App": "Transcof"
  }, 

  {
    "user": "user7",
    "id": 7,
    "username": "smarcinkowski6",
    "file": "NullaDapibus.avi",
    "App": "Ventosanzap"
  }
];
*/

//////////////////////////////////////
//lukaisee vain JSON tiedostona, ja siellä on pieni muutos
try {
  //read exist file and name the object
  const appJSON = fs.readFileSync("./appSoft.json", "utf-8");
  const appJSONParse = JSON.parse(appJSON);

  //TODO-1:: lukaisee vain yksittäisen user/objektin tekijänssä
  console.log(appJSONParse[Math.floor(Math.random() * appJSONParse.length)]);

  console.log(typeof appJSONParse + "--------------");

  //TODO-2: toistettaan rajoitettu määrä ja random id määrä
  for (let i = 0; i < 3; i ++ )
  {
    console.log(appJSONParse[Math.floor(Math.random() * appJSONParse.length)]);
  }

}
catch (err) {
  console.log(err);
}


//////////////
//TESTAUS KOMMENTIT START HERE
//////////////////////////////////////

// TODO-1:: lukaisee vain JavaScript sisäisen oman objektin tekijänsä
/*
const appJSON = JSON.stringify(appSoft);
const appJSONParse = JSON.parse(appJSON);
//console.log(appJSONParse.creater); //tulostaa kaikki
console.log("\n");

console.log(appJSONParse[Math.floor(Math.random() * appJSONParse.length)]);
*/

//////////////////////////////////////

//TODO-2:: in "appsoft" tai "appJSONParse" & toistaa kaikki user-xLuku
/*
for (let keyApp in appSoft) {
    console.log(keyApp);
}*/

//////////////////////////////////////

//TODO-3:: toistaa kaikki "creater" - sisäisen datan
/*
const randomSoft = appSoft.creater[Math.floor(Math.random() * appSoft.creater.length)];
console.log(randomSoft);
*/

//for loop testaus, jotta toistettaisi kerran tai useamman kerran:
/*
for (let i = 0; i < 5; i++ ) {
  const objName = appSoft[i];
  console.log("Username: " + objName.username);

  try {
    const randomName = objName[Math.floor(Math.random() * objName.length)];
    console.log("App: " + objName.App);
  }
  catch(err)
  {
    console.log(err);
  }

}*/


//https://stackoverflow.com/questions/57946100/how-could-i-find-a-json-object-by-id-using-nodejs-js
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

//Tässä tehdään päivitystä tonne json tiedostoon, sekä pitää määrittää ennen sitä funktiota & lisäksi pitää määrittää kuin just just tasan tarkalleen sinne tiedoston, mitä tulee päivitystä
/*
function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

//Kysyy käyttäjältä tai antaa käyttäjän antaa iskeä uuden nimen jollekn objektille
const inputName = prompt("New person name: ");
const inputCity = prompt("New city name: ");


jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  // increase customer order count by 1 & or change object or give a new name
  customer.city = inputCity;
  customer.name = inputName;
  fs.writeFile("./customer.json", JSON.stringify(customer, null, 2), err => {
    if (err) console.log("Error writing file:", err);
  });
});
*/


/* JSON read, write & update notes::
JSON.stringify tarkoittaa: methodin muuntamista javascript:ssä, että objektin tai numeron json merkkijonoksi ja korvaa valinnaisesti arvoa

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

JSON.parse tarkoittaa: menetelmä jäsentää JSOn-merkijonoa ja muodostaa merkkijonon kuvaamista javascript arvoa tai objektia. Valinnaisen elvytystoiminnossa voi tarjota suorittamia muunnosta tuloksen olevia objektille ennen sen palautumista.
*/
