const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const fileSchema = new mongoose.Schema({
    file: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const File = mongoose.model('File', fileSchema)

module.exports = File