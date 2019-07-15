const express = require('express')

const app = express()

const PORT = 5555

// Book Endpoints
const bookCtrl = require('./bookController')
app.get(`/api/getBooks`, bookCtrl.getAllBooks)
app.get(`/api/getBook/:id`, bookCtrl.getBookById) // req.params
app.get(`/api/search`, bookCtrl.searchByTitle) // req.query

// User Endpoints

app.listen( PORT, () => console.log(`Bingpot on port ${PORT}`))







