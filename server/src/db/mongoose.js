const fs = require('fs')
const mongoose = require('mongoose')
const loginJSON = JSON.parse(fs.readFileSync('./src/db/login.json'))

const user = loginJSON[0].user
const password = loginJSON[0].password

mongoose.connect('mongodb+srv://' + user + ':' + password + '@kuznyechik-klr4c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})