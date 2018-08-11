// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
var db = require("../models")
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll().then(todos => {
      res.json(todos);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    var todo = req.body.text;
    var complete = req.body.complete;
    console.log("Adding todo.")
    db.Todo.create({ text: todo, complete: complete }).then(todo => {
    console.log("Todo added.")
    res.json(todo);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    var todoId = req.params.id

    db.Todo.destroy({
      where: {
        id: todoId
      }
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    console.log(req.body);
    
    var todoId = req.body.id;
    var todoEdits = req.body.text;

    db.Todo.update(
      { text: todoEdits },
      { where: { id: todoId } }
    ).then(edits => {
      res.json(edits);
    });
});

};
