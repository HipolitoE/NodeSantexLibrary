const { bookService } = require('../services')

const createBook = async (req, res) => {
    const book = req.body
    try {
        const newBook = await bookService.createBook(book);
        if(newBook){
            res.status(201).json(newBook);
        }else{
            res.status(400).json({msg: 'Error al crear el libro'});
        }
    } catch (error) {
        res.status(500).json({action: "Error del servidor", error: error.message});
    }
};

const getBook = async (req, res) => {
    const id = req.params.bookId;
    try {
        const bookFound = await bookService.getBook(id);
        if(bookFound){
            res.status(200).json(bookFound);
        }else{
            res.status(404).json({error: 'Error al buscar el Libro'})
        }
    } catch (error) {
        res.status(500).json({action: "Error del servidor", error: error.message})
    }
}

const getBooks = async (req, res) => {
    try {
        const booksFound = await bookService.getBooks()
        if(booksFound.length > 0){
            res.status(200).json(booksFound)
        }else{
            res.status(404).json({error: 'No hay ningun libro agregado'})
        }
    } catch (error) {
        res.status(500).json({action: "Error del servidor", error: error.message})
    }
}

const updateBook = async (req, res) => {
    const id = req.params.bookId
    const newBook = req.body

    try {
        const updatedBook = await bookService.updateBook(id, newBook);
        if(updatedBook[0] !== 0){
            res.status(200).json({ msg: `El libro con el id: ${id}, fue modificado` });
        }else{
            res.status(404).json({error: 'El libro no existe'});
        }
    } catch (error) {
        res.status(500).json({action: "Error del server", error: error.message});
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.bookId;
    try {
        const bookDeleted = await bookService.deleteBook(id);
        if(bookDeleted !== 0){
            res.status(204).json({action: `El libro con el id: ${id}, fue borrado` });
        }else{
            res.status(404).json({error: 'El libro no exite'});
        }
    } catch (error) {
        res.status(500).json({action: "Error del server", error: error.message});
    }
}



module.exports = {
    createBook,
    getBook,
    getBooks,
    updateBook,
    deleteBook
}