const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const { error } = require('console');

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
 
// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Abhinav'

    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    // ={} is to provide default value as empty to avoid destructuring error if no address is provided 
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({error});
        }
        forecast (latitude, longitude, (error, forecastData) =>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        name: 'Andrew',
        title: 'Help'
    })
})

app.get('/help/*', (req, res) =>{
    res.render('404', {
        title: '404',
        name: 'Andrew',
        errorMessage: 'Help article not found'
    });
})  

app.get('*', (req, res) =>{
    res.render('404',  {
        title: '404',
        name: 'Andrew',
        errorMessage: 'Page not found'

    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})