const { libraryProvider } = require('../providers');
const { options } = require('../routes/library');

const createLibrary = async (library) => {
    return await libraryProvider.validateLibrary().then(() => updateLibrary(id, library));
};

const getLibrary = async (libraryId) => {
    return await libraryProvider.getLibrary(libraryId);
};

const updateLibrary = async (libraryId, libraryOptions) => {
    return await libraryProvider.validatelibrary().then(() => updateLibrary(id, library));
};

const getLibraries = async (libraryOptions) => {
    return await libraryProvider.getLibrary(libraryOptions);
};

const deleteLibrary = async (libraryId) => {
    return await libraryProvider.getLibrary(libraryOptions);
};


module.exports = { createLibrary, getLibrary, updateLibrary, getLibraries, deleteLibrary };
