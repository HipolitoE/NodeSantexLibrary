const { bookProvider } = require('../providers');
const { options } = require('../routes/book');

const createBook = async (book) => {
    return await bookProvider.validateBook().then(() => updateUser(id, book));
};

const getBook = async(bookId) => {
    return await bookProvider.getBook(bookId);
};

const updateBook = async(bookId,bookOptions) => {
    return await bookProvider.validateBook().then(() => updateBook(id, book));
};

const getBooks = async(bookOptions) => {
    return await bookProvider.getBooks(bookOptions);
};

const deleteBook = async(bookId) => {
    return await bookProvider.getBooks(bookOptions);
};



module.exports = { createBook, getBook, updateBook, getBooks, deleteBook };