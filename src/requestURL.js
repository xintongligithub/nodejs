const request= require('postman-request')

url = 'https://www.marketindex.com.au/asx-listed-companies'

request({ url:url } , (error, response ) => {
    console.log(response)
})