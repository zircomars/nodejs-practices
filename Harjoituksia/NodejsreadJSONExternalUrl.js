/* ohje ja tutoriaalit:
https://shouts.dev/parse-json-in-node-js-from-external-url

ohje & toiminta:
tässä vain riittää liittää olemassa olevan url, missä näkyy json tiedosto muodossa. Tänne linkkittää sen url:in ja loppu perään polku kautta numero, mikäli pystyy & niin näyttää erikseen sen tekijän ja infon. Koska vähentää sitä datan esiintymistä, että näkyy paremmin kuin yhteen pötköön dataa.

ainakin näitä voisi kokeilla, ja testata vähä::
https://jsonplaceholder.typicode.com/users/
https://jsonplaceholder.typicode.com/posts/

*/

var request = require("request")

var url = "https://jsonplaceholder.typicode.com/todos"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})
