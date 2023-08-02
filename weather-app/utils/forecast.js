const request = require("request")
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=739395c01f6993ff61f5e30453952c4f&query="+latitude + "," + longitude + "&units=f"
// destructuring 
    request({url, json: true}, (error, {body})=> {
        if(error){
            console.log('1')
            callback('unable to connect to weather service!', undefined)
        } else if(body.error){
            console.log('2')
            callback('unable to find location', undefined)
        } else{
            console.log('3')
            callback(body.current, undefined)
        }
    })
}
module.exports = forecast