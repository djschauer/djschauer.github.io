var mysql = require("mysql");
var inquirer = require("inquirer");
var Tablefy = require("tablefy");

var table = new Tablefy();

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "root",
    database: "spamazonDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    modeSelect();
  });

  function modeSelect() {
      inquirer.prompt(
          [
              {
                  name: "mode",
                  type: "list",
                  message: "What program mode would you like to use?",
                  choices: ["Shop", "Manage Inventory","Review Sales"]
              }
          ]
      ).then(function(answers){
            switch (answers.mode) {
                case "Shop":
                    buyMode();
                break;
                case "Manage Inventory":
                    inventoryMode();
                break;
                case "Review Sales":
                    salesReports();
                break;
            }
      });
  };

  function buyMode() {
        console.log("These are the items currently available");
        connection.query("SELECT itemName, department, price, stock FROM inventoryCatalog", (err, res)=>{
            table.draw(res);
        });
        inquirer.prompt(
            [
                {
                    name: "item",
                    type: "input",
                    message: "What item would you like to buy?"
                }
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like?"
                }
            ]
        ).then(function(answers) {
            var itemID = answers.item;
            var amount = answers.quantity;

            connection.query("")            
            console.log("You have bought: " + answers.quantity + " " + answers.item);

        });
  };

  function inventoryMode() {

  };

  function salesReports() {

  };