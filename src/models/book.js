const {sequelize} = require('../config/dbCofing');
const {DataTypes} = require('sequelize');
const Library = require('./library');

const Book = sequelize.define('Books',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    isbn:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor:{
        type: DataTypes.STRING,
    },
    year:{
        type: DataTypes.STRING,
    },
    library:{
         type: DataTypes.INTEGER,
         allowNull: false,
        
     },
});

Book.belongsTo(Library,{foreignKey:'library'});

module.exports = Book;