const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    price: { type: String, required: true }
});

module.exports = model('Book', BookSchema);