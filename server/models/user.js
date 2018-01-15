const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema(
    {
        shop: { type: String, unique: true, lowercase: true },
        access_token: { type: String }
    }
)

// Export
module.exports = mongoose.model('user', userSchema)