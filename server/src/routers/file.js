const path = require('path')
const express = require('express')
require('../db/mongoose')
const bodyParser = require('body-parser');
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const auth = require('../middleware/auth')
const router = new express.Router()

router.use(express.json())
router.use(bodyParser.urlencoded({ extended: true }));

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'sbhack19-prod/upload',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, Date.now().toString())
        }
    })
});

//open http://localhost:3000/ in browser to see upload form
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

//used by upload form
router.post('/upload', upload.array('upl', 1), (req, res, next) => {
    res.send("Uploaded!")
})

module.exports = router