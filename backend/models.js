const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stockSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    numberInStock: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    basicDescription: {type: String, required: true},
    fullDescription: {type: String, required: true},
    reviews: {type: Array, required: true}
})

module.exports = mongoose.model('stockitem', stockSchema)