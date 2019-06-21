const mongoose = require('mongoose')

const env = process.env.NODE_ENV || 'development';
let config = {};
if (env !== "production") {
    config = require('./config');
}
const USER = process.env.DB_USER || config.DB_USER
const PASSWORD = process.env.DB_PASS || config.DB_PASS

mongoose.connect('mongodb+srv://' + USER + ':' + PASSWORD + '@kuznyechik-klr4c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})