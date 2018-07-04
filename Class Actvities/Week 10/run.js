var bandList = require("./bands.js");


for (var key in bandList) {
    console.log("A " + key + " band is " + bandList[key] + ".");
}