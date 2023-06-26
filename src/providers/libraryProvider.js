const { Op } = require('sequelize').Sequelize;
const { Library } = require('../models');


const createLibrary = async (libraryOptions) => {
    try {
        const newLibrary = await Library.create(libraryOptions);
        return newLibrary;
    } catch (error) {
        throw error;
    }
};

const getLibrary = async (id) => {
    try {
        const library = await Library.findByPk(id);
        if (library) {
        return library;
    } else {
        throw new Error ("Libreria no encontrado");
    }
    } catch (error) {
        throw error;
    }
};


const getLibraries = async (options) => {
    try {
        const libraries = await Library.findAll({ where: { [Op.or]: options} });
        if (libraries) {
        return libraries;
    } else {
        throw new Error ("No se encontraron librerias con ese criterio de busqueda");
    }
    } catch (error) {
        throw error;
    }
};

const updateLibrary = async (libraryId, libraryOptions) => {
    try {
        await getLibrary(libraryId);
        const [numRowsUpdated] = await Library.update(libraryOptions, {
            where: { id: libraryId },
     });
     console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`)
    return Library.findByPk(userId);
    } catch (error) {
        throw error;
    }
};


const deleteLibrary = async (libraryId) => {
    try {
        console.log(`El libro id: ${libraryId} ha sido borrado`)
        return Library.destroy({ where: { id: libraryId } });
    } catch (error) {
        throw error;
    }
};

const validateLibrary = async (library, location) => {
    try {
        const library = await Library.findOne({
            where: { name: library, location}
        });
        if (library) {
        return library;
    } else {
        return false;
    }
    } catch (error) {
        throw error;
    }
};

module.exports( createLibrary, getLibraries, getLibrary, updateLibrary, deleteLibrary, validateLibrary );