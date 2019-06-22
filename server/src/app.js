const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const fileRouter = require('./routers/file')
const bodyParser = require('body-parser');
const aws = require('aws-sdk')
const auth = require('./middleware/auth')

const app = express()
const port = process.env.PORT || 3000

const env = process.env.NODE_ENV || 'development';

awsConfig = {}
if (env !== "production") {
    awsConfig = require('./awsConfig');
}

aws.config.update({
    secretAccessKey: awsConfig.secretAccessKey,
    accessKeyId: awsConfig.accessKeyId,
    region: 'us-east-1'
});

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
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