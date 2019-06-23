const aws = require('aws-sdk')

const env = process.env.NODE_ENV || 'development';

awsConfig = {}
if (env !== "production") {
    awsConfig = require('./awsConfig');
}

const SECRET_KEY = process.env.SECRET_KEY || awsConfig.secretAccessKey
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID || awsConfig.accessKeyId
console.log()
aws.config.update({
    secretAccessKey: SECRET_KEY,
    accessKeyId: ACCESS_KEY_ID,
    region: 'us-east-1'
});