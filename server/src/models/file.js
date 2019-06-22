const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    filename: {
        type: String
    },
    hash: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const File = mongoose.model('File', fileSchema)

module.exports = File