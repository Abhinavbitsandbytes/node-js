const request = require("request")
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=739395c01f6993ff61f5e30453952c4f&query="+latitude + "," + longitude + "&units=f"
// destructuring 
    request({url, json: true}, (error, {body})=> {
        if(error){
            callback('unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('unable to find location', undefined)
        } else{
            
            callback(undefined, 'It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}
module.exports = forecast