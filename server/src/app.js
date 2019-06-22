const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(userRouter)

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})