const mongoose = require('mongoose')

const env = process.env.NODE_ENV || 'development';
let config = {};
if (env !== "production") {
    config = require('./config');
}
const USER = process.env.DB_USER || config.DB_USER
const PASSWORD = process.env.DB_PASS || config.DB_PASS
const CONNECTION_URI = 'mongodb+srv://' + USER + ':' + PASSWORD + '@kuznyechik-klr4c.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Successfully connected to MongoDB')
}).catch((e) => {
    console.log("Error while connecting to MongoDB: " + e + e.errorLabels[0])
})