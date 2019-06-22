const aws = require('aws-sdk')

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