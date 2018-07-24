var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  queryDanceSongs();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    console.log(res);
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    createSongs();
  });

  // logs the actual query being run
  console.log(query.sql);
};

function createSongs() {
  var query = connection.query(
    "INSERT INTO songs SET ?", 
  {
    title: "Sinner",
    artist: "Thomas Abban",
    genre: "Alternative Rock"
  },
  function (err, res) {
    console.log(res.affectedRows + " New Song!")
    updateSongs();
  }
);
console.log(query.sql);
}

function updateSongs() {
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
  [
    {
      title: "Echo"
    },
    {
      artist: "Thomas Abban"
    }
  ],
  function(err, res) {
    console.log("Updating Thomas Abban's song title");
    deleteSongs();
  }
);
console.log(query.sql);
};

function deleteSongs() {
  var query = connection.query(
    "DELETE FROM songs WHERE ?",
    {
      artist: "Black Coast"
    },
    function(err, res) {
      console.log(res.affectedRows + " Song Deleted!")
      readSongs();
    }
  );
  console.log(query.sql);
};

function readSongs() {
  var query = connection.query("SELECT * FROM songs",
  function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}