// Imports
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000



// Public folder path
const publicPath = path.join(__dirname, '..', 'public')

// Setting up server
const app = express()

app.use(
    express.static(publicPath)
)

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
}) 



// Run server
app.listen(port, () => {
    console.log('server is running')
})