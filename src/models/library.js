const {sequelize} = require('../config/dbCofing');
const {DataTypes} = require('sequelize');
const Book = require('./book')

const Library = sequelize.define('Libraries',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    location:{
        type: DataTypes.STRING,
        allowNulla: false,
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
});

Library.hasMany(Book,{foreignKey:'book'});

module.exports = Library;