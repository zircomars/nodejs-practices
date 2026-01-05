/*ohjeet: https://shouts.dev/parse-json-in-node-js-from-external-url


*/

var request = require("request")

var url = "https://jsonplaceholder.typicode.com/posts/"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})

/* console tai joku komento lähde toistaa, just sitä url json array dataa;;

{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}


*/
