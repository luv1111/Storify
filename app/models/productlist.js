const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    }
})

module.exports = mongoose.model('productlist', productlistSchema)