require

// var args = process.argv;

// var parseSearch = {
//     argArray: args,
//     searchArray: parseSearch.argArray.slice(2),
//     searchCmd: parseSearch.searchArray[0],
//     searchKeys: parseSearch.searchArray.slice(1),
//     parseCmd: function(term) {
//         switch (term) {
//             case show:
//             console.log("Search for Show");
//             break;
//             case actor:
//             console.log("Search for Actor");
//             break;
//             default:
//             console.log("Unknown command.")
//             break;
//         }
//     },
//     parseKeywords: function(keys) {
//         keys.forEach(element => {
//             console.log(element);
//         });
//     }
// }

// console.log(parseSearch.argArray);

// parseSearch.parseCmd(parseSearch.searchCmd);
// parseSearch.parseKeywords(parseSearch.searchKeys);



var argArray = process.argv;
var searchArray = argArray.slice(2);

var searchCmd = searchArray[0];
var searchKeys = searchArray.slice(1);
console.log(searchArray);
console.log(searchKeys);
console.log(argArray);


function parseSearchTerm(term) {
    switch (term) {
        case "show":
        console.log("Search for Show.");
        break;
        case "actor":
        console.log("Search for Actor.");
        break;
        default:
        console.log("Unknown command.")
        break;
    }
}

function parseKeywords(keys) {
    keys.forEach(element => {
        console.log(element);
    });
}

parseSearchTerm(searchCmd);
parseKeywords(searchKeys);