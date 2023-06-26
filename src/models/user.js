const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig').sequelize;

const User = sequelize.define("User", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validates: {
            isEmail: true,
        },
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;