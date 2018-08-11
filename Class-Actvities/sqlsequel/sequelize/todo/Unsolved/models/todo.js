var sequelize = require("sequelize");

const Todo = sequelize.define('todo', {
    text: {
        type: sequelize.STRING
    },
    complete: {
        type: sequelize.BOOLEAN
    }
});