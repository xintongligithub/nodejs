const fct = (data, callback) => {
    console.log('function executing. data: ' + data)
    console.log('calling callback function')
    callback(null, 'result string')
    console.log('finish callback function')
}

fct('first parameter', (error, result) => {
    console.log('callback executing')
})