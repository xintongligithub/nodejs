const express = require('express')
const path = require('path')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/about/info', (req,res) => {
    res.send('<h1>information</h1>')
})

app.get('/about', (req,res) => {
    res.send('<h1>about</h1>')
})

app.get('*', (req, res) => {
    res.send('404 page not found')
})

app.listen(3000)