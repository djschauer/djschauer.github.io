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
        displayInventory();
        buyItem();
  };

  function inventoryMode() {

  };

  function salesReports() {

  };

  function displayInventory () {
    connection.query("SELECT id, itemName, department, price, stock FROM inventoryCatalog", (err, res)=>{
        table.draw(res);
    });
  };

  function buyItem() {
    inquirer.prompt(
        [
            {
                name: "item",
                type: "input",
                message: "What item would you like to buy?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like?"
            }
        ]
    ).then(function(answers) {
        var itemID = answers.item;
        var amount = answers.quantity;
        connection.query("SELECT * FROM inventoryCatalog WHERE ?", 
        {
            id: itemID
        }, function(err, res) {
            if (err) throw err;
            console.log("Processing Order");
            var item = res[0];
            var itemStock = item.stock;
            var itemPrice = item.price;
            var productSold = item.productSold;

            console.log(itemStock);
            
            if (res.length === 0) {
                console.log("There are no products with that ID. Please select a valid product ID");
                buyMode();
            } else if (itemStock < amount) {
                console.log("There are not enough items in stock for you to purchase that. Please either select a new item, or buy less.");
                } else {
                    console.log("Placing Order");
                    connection.query("UPDATE inventoryCatalog SET ? WHERE ?",
                [ 
                    {
                        stock: itemStock - amount,
                        productSold: productSold + amount                        
                    },
                    {
                        id: itemID
                    }
                ], function (err, res) {
                    if (err) throw err;

                    console.log("Your order has been placed.")
                    console.log("You have been charged: " + (amount * itemPrice));
                    displayInventory();
                    inquirer.prompt(
                        [
                            {
                                name: "buyagain",
                                type: "confirm",
                                message: "Would you like to continue shopping?",
                                default: true
                            }
                        ]
                    ).then(function(answers){
                        if (answers.buyagain) {
                            buyMode();
                        } else {
                            process.exit();
                        }
                    });
                });
            }
        });
    });
  }