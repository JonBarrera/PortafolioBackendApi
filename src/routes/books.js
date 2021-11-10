const { Router } = require('express');
const router = Router();

const Book = require('../models/book');

router.get('/', async(req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.get('/:id', async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

router.post('/', async(req, res) => {
    const { title, author, isbn, price } = req.body;
    const newBook = new Book({ title, author, isbn, price })
    await newBook.save();
    res.json({ message: 'Book Saved' });
});

router.put('/:id', async(req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Book Update' });
});

router.delete('/:id', async(req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

module.exports = router;