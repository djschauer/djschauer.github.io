var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name hero?",
            name: "username",
            default: "user"
        },
        {
            type: "password",
            message: "We need a secret way to know it is you, what would you like our code word to be?",
            name: "password",
            default: "password"
        },
        {
            type: "list",
            message: "What kind of hero are you?",
            name: "class",
            choices: ["Berserker", "Shieldmaiden", "Skald", "Volva"]
        },
        {
            type: "checkbox",
            message: "What are two skills you know?",
            name: "skills",
            choices: ["Archery", "Magic", "Healing", "Swords", "Axes", "Spears", "Shields", "Poetry", "Song", "Instruments", "Pathfinding", "Sailing", "Trade"]
        },
        {
            type: "confirm",
            message: "Are you ready hero?",
            name: "confirm",
            default: "true"
        },
    ]).then(function(response){   
        console.log("Your name is: " + response.username);
        console.log("Our code word shall be: " + response.password);
        console.log("You are a " + response.class + " that is skilled in " + response.skills[0] + " and " + response.skills[1] + ".");
        console.log("Welcome to Asgard hero, good luck on your adventures!");
    });