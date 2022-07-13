const mongoose = require('mongoose')

const PlaylistSchema = new mongoose.Schema({
    userId: String,
    lists: {
        type: [String],
        trim: true
    }
})

module.exports = mongoose.model('playlists', PlaylistSchema)