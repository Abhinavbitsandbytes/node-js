const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYWJoaW5hdmtyMTk3IiwiYSI6ImNsa2xpcnhiaDA3OW4zZHBsN2dxdWgxejQifQ.Cfw1C1g7v3torXWqXaE7fg"
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback("unable to connect to location services!", undefined)
        }
        else if(body.features.length === 0){
callback("Unable to find location. Try another search", undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }) 
        }
    })
}

module.exports = geocode