const { Op } = require('sequelize').Sequelize;
const { Book } = require('../models');
const { libraryProvider } = require('./libraryProvider');


const createBook = async (bookOptions) => {
    try {
        await libraryProvider.getLibrary(bookOptions.library);
        const newBook = await Book.create(bookOptions);
        return newBook;
    } catch (error) {
        throw error;
    }
};

const getBook = async (id) => {
    try {
        const book = await Book.findByPk(id);
        if (book) {
        return book;
    } else {
        throw new Error ("Libro no encontrado");
    }
    } catch (error) {
        throw error;
    }
};


const getBooks = async (options) => {
    try {
        const books = await Book.findAll({ where: { [Op.or]: options} });
        if (books) {
        return books;
    } else {
        throw new Error ("No se encontraron libros con ese criterio de busqueda");
    }
    } catch (error) {
        throw error;
    }
};

const updateBook = async (bookId, bookOptions) => {
    try {
        await getBook(bookId);
        const [numRowsUpdated] = await Book.update(bookOptions, {
            where: { id: bookId },
     });
     console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`)
    return User.findByPk(bookId);
    } catch (error) {
        throw error;
    }
};


const deleteBook = async (bookId) => {
    try {
        console.log(`El libro id: ${bookId} ha sido borrado`)
        return Book.destroy({ where: { id: bookId } });
    } catch (error) {
        throw error;
    }
};

const validateBook = async (book, isbn) => {
    try {
        const library = await Book.findOne({
            where: { name: book, isbn}
        });
        if (book) {
        return book;
    } else {
        return false;
    }
    } catch (error) {
        throw error;
    }
};


module.exports( createBook, getBook, getBooks, updateBook, deleteBook, validateBook );