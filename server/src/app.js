const express = require('express')
require('./db/mongoose')
require('./aws/aws')
const userRouter = require('./routers/user')
const fileRouter = require('./routers/file')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Authorization"]);
    next();
});

app.use(userRouter)
app.use(fileRouter)

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})