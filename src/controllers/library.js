const { libraryService } = require('../services')

const createLibrary = async (req, res) => {
    const library = req.body
    try {
        const newLibrary = await libraryService.createLibrary(library)
        if(newLibrary){
            res.status(201).json(newLibrary)
        }else{
            res.status(400).json({msg: 'Error al crear la Libreria'})
        }
    } catch (error) {
        res.status(500).json({action: 'Error del server', error: error.message})
    }
}

const getLibrary = async (req, res) => {
    const id = req.params.libraryId
    try {
        const libraryFound = await libraryService.getLibrary(id)
        if(libraryFound){
            res.status(200).json(libraryFound)
        }else{
            res.status(404).json({error: 'Error al buscar la Libreria'})
        }
    } catch (error) {
        res.status(500).json({action: "Error del server", error: error.message})
    }
}

const getAllLibraries = async (req, res) => {

    try {
        const librariesFound = await libraryService.getAllLibraries()
        if(librariesFound.length > 0){
            res.status(200).json(librariesFound)
        }else{
            res.status(404).json({error: 'Error al buscar las librerias'})
        }
    } catch (error) {
        res.status(500).json({action: 'Error del server', error: error.message})
    }
}

const updateLibrary = async (req, res) => {
    const id = req.params.libraryId
    const newLibrary = req.body
    try {
        const libraryUpdated = await libraryService.updateLibrary(id, newLibrary)
        if(libraryUpdated[0] !== 0){
            res.status(200).json({action: "UpdateLibrary", msg: `La Libreria con id: ${id}ha sido modificada`})
        }else{
            res.status(404).json({error: 'Error al actualizar la Libreria'})
        }
    } catch (error) {
        res.status(500).json({action: 'Error del server', error: error.message})
    }
}

const deleteLibrary = async (req, res) => {
    const id = req.params.libraryId

    try {
        const libraryDeleted = await libraryService.deleteLibrary(id)
        if(libraryDeleted !== 0){
            res.status(204).json({action: "DeleteLibrary", msg: `Library with id: ${id}, was succesfuly deleted`})
        }else{
            res.status(400).json({error: `Library with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => DeleteBook", error: error.message})
    }
};

module.exports = {
    createLibrary,
    getLibrary,
    getAllLibraries,
    updateLibrary,
    deleteLibrary,
}