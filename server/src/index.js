const express = require('express')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('', (req, res) => {
    res.send('Hello express!')
})

// app.get('/about', (req, res) => {
//     res.send('About')
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})