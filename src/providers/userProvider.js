const { Op } = require('sequelize').Sequelize;
const { User } = require('../models');


const createUser = async (userOptions) => {
    try {
        const newUser = await User.create(userOptions);
        return newUser;
    } catch (error) {
        throw error;
    }
};

const getUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
        return user;
    } else {
        throw new Error ("Usuario no encontrado");
    }
    } catch (error) {
        throw error;
    }
};


const getUsers = async (options) => {
    try {
        const users = await User.findAll({ where: { [Op.or]: options} });
        if (users) {
        return users;
    } else {
        throw new Error ("No se encontraron usuarios con ese criterio de busqueda");
    }
    } catch (error) {
        throw error;
    }
};

const updateUser = async (userId, userOptions) => {
    try {
        await getUser(userId);
        const [numRowsUpdated] = await User.update(userOptions, {
            where: { id: userId },
     //   returning: true,
     });
     console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`)
    return User.findByPk(userId);
    } catch (error) {
        throw error;
    }
};


const deleteUser = async (userId) => {
    try {
        return User.destroy({ where: { id: userId } });
    } catch (error) {
        throw error;
    }
};

const validateUser = async (user, password) => {
    try {
        const user = await User.findOne({
            where: { email: user, password}
        });
        if (user) {
        return user;
    } else {
        return false;
    }
    } catch (error) {
        throw error;
    }
};



module.exports = {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
    validateUser,
};

