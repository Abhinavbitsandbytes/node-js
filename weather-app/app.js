const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
    console.log("Please provide an address!");
}else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (forecastData, error) => {
            if (error) {
                return console.log(error)
            }
            console.log(location);
            console.log(forecastData)
        })
    })
}

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}






