var http = require('http'); //http 

const _ = require('lodash');

var theItems = ["apple", "carrot", "orange", "cheese", "tomate", "lemon", "pork", "olive", "banana", "potato"];

var newItems = [];
//var items = ['Yes', 'No', 'Maybe'];

for(var i = 0; i < 5; i++) {
  var idx = Math.floor(Math.random()*theItems.length);
  newItems.push(theItems[idx]);
  theItems.splice(idx,1);
}

//var item = items[Math.floor(Math.random() * items.length)];
//const item = items[Math.floor(Math.random()*items.length)];
console.log("Random food now: " + newItems)

////////////////////////////////////

//let example = _.fill([1,2,3,4,5], newItems [Math.floor(Math.random() * theItems.length-1)], 1,4 )
//let example = _.fill([1,2,3,4,5], newItems, 1,4 )
//console.log(example);


//funktio & serverin luonti 
function onRequest(request, response) {
    response.writeHead(250, {'Content-Type': 'text/html'});
    response.write('Random food is::  ');
    response.write(`${newItems}`);
    response.end();
}

http.createServer(onRequest).listen(8000);


/*
var theItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var newItems = [];

for (var i = 0; i < 3; i++) {
  var idx = Math.floor(Math.random() * theItems.length);
  newItems.push(theItems[idx]);
  theItems.splice(idx, 1);
}

console.log(newItems);
*/


/*joku kirjaston lataus eli
npm install lodash

kun käynnistät tämän sovelluksen index.js , nii se ennen sitä pitää installaa toi, koska se on kuin yksi "package using npm" joku kirjasto tiedosto npm:stä tai muu vastaava.

poistaminen menee: npm un install lodash
tässä esimerkkissä tapahtuu, että banaani sanan kuin mene ton listan array tilalle 1,4 ovat kuin varattu, muihin tilaan tulee se banaani sana

*/
