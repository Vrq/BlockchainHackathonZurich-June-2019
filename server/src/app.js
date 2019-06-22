const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const fileRouter = require('./routers/file')
const bodyParser = require('body-parser');
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
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

// aws.config.update({
//     secretAccessKey: 'CEOnEt/NMKgedYOg5bTd1LjDLqeh6oRRwFt0dV4R',
//     accessKeyId: 'AKIAX5O4NT77GXI3BHXE',
//     region: 'us-east-1'
// });

// const s3 = new aws.S3();

// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         acl: 'public-read',
//         bucket: 'sbhack19-prod/upload',
//         key: function (req, file, cb) {
//             console.log(file);
//             cb(null, Date.now().toString()); //use Date.now() for unique file keys
//         }
//     })
// });

// //open http://localhost:3000/ in browser to see upload form
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// //used by upload form
// app.post('/upload', upload.array('upl', 1), (req, res, next) => {
//     res.send("Uploaded!");
// });