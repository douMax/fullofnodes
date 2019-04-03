const express = require('express')
const app = express()

// route handler
app.get('/', (req, res) => {
    res.send("hahaha")
})


const PORT = process.env.PORT || 5000 
//environment varibales, in dev environment use 5000
app.listen(PORT)

