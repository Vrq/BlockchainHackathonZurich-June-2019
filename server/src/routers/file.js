const path = require('path')
const express = require('express')
require('../db/mongoose')
const bodyParser = require('body-parser');
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')
const File = require('../models/file')
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
            console.log(file.originalname);
            cb(null, file.originalname)
        }
    })
})

// DEV: open http://localhost:3000/ in browser to see upload form
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

router.post('/users/me/upload', [auth, upload.array('upl', 1)], (req, res, next) => {
    const key = req.files[0].originalname

    async function getObject(bucket, objectKey) {
        try {
            const data = await s3.getObject({ Bucket: bucket, Key: objectKey }).promise();

            return data.Body.toString('utf-8');
        } catch (e) {
            throw new Error(`Could not retrieve file from S3: ${e.message}`)
        }
    }

    getObject('sbhack19-prod/upload', key).then( async (res) => {

        const hash = await bcrypt.hash(res, 8)

        data = {
            filename: key.split('.').slice(0, -1).join('.') + '.json', //replace extension (taken from upload) with .json
            hash,
            owner: req.user._id
        }

        s3.putObject({ 
            Bucket: 'sbhack19-prod/hashData', 
            Key: data.filename, 
            Body: JSON.stringify(data),
            ContentType: "application/json"
        }, function (err, data) {
            if (err) {
                console.log(err, err.stack);
            } 
            else {
                console.log(data)
            }
        });
      
    })

    res.send("Uploaded file, personal hash created & stored!")
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router