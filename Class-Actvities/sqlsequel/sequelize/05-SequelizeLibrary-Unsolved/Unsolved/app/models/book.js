// Require the sequelize library

var Sequelize = require('sequelize');

// Require the connection to the database

var sequelize = require('../config/connection');

// Create a "Book" model

const Book = sequelize.define("Books", {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    author: {
        type: sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: sequelize.STRING,
        allowNull: false
    },
    pages: {
        type: sequelize.STRING,
    }
});

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;