const http = require('http'); // for https we need to import https 
const url = "http://api.weatherstack.com/current?access_key=739395c01f6993ff61f5e30453952c4f&query="+ "40,-75" + "&units=f"

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        console.log(chunk)
        data = data + chunk.toString();
    })
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})
request.on('error', (error) => {
    console.log("An error", error)
})
request.end()