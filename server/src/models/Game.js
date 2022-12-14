const mongoose = require('mongoose')

const Schema = mongoose.Schema

let GameSchema = new Schema(
    {
        name: String,
        thumbnail: String,
        description: String,
        time: Date
    }
)

const Game = mongoose.model('Game', GameSchema)

module.exports = Game