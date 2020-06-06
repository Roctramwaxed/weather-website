const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=31baf3928fe3126890ea93906f004d18&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service.', undefined)
        } else if (body.error) {
            callback('Unable to determine location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + ' degrees and feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast