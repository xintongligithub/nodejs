// const request= require('postman-request')

// url = 'http://api.weatherstack.com/current?access_key=8210a388211d309034796137e0f0db52&query=New%20York'

// request({ url:url } , (error, response ) => {
//     console.log(response)
// })

const fct = (data, callback) => {
    console.log('function executing. data: ' + data)
    console.log('calling callback function')
    callback(null, 'result string')
    console.log('finish callback function')
}

fct('first parameter', (error, result) => {
    console.log('callback executing')
})