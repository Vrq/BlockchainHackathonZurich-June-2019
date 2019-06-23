const path = require('path')
const express = require('express')
require('../db/mongoose')
const bodyParser = require('body-parser');
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const bcrypt = require('bcryptjs')
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
    const timeStamp = Date.now().toString()

    async function getObject(bucket, objectKey) {
        try {
            const data = await s3.getObject({ Bucket: bucket, Key: objectKey }).promise();

            return data.Body.toString('utf-8');
        } catch (e) {
            throw new Error(`Could not retrieve file from S3: ${e.message}`)
        }
    }

    // download uploaded file's buffer from s3
    getObject('sbhack19-prod/upload', key).then( async (res2) => {

        // hash upload file buffer
        const hash = await bcrypt.hash(res2, 8)

        // create hash data json
        const hashData = {
            filename: key.split('.').slice(0, -1).join('.') + '.json', //replace extension (taken from upload) with .json
            hash,
            owner: req.user._id
        }

        // upload hash data json to s3
        s3.putObject({ 
            Bucket: 'sbhack19-prod/hashData', 
            Key: timeStamp + '_' + hashData.filename, 
            Body: JSON.stringify(hashData),
            ContentType: "application/json"
        }, function (err, data) {
            if (err) {
                console.log(err, err.stack);
            } 
            else {
                console.log(data)
            }
        })

        // Replace uploaded file with copy matching hash data json's naming convention (timeStamp_filename)
        s3.copyObject({
            Bucket: 'sbhack19-prod/upload',
            CopySource: `${'sbhack19-prod/upload/'}${key}`,
            Key: timeStamp + '_' + key
        }).promise()    
            .then(() =>
                s3.deleteObject({
                    Bucket: 'sbhack19-prod/upload',
                    Key: key
                }).promise()
            )
            .catch((e) => console.error(e))

        res.send(hashData)
    })
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router