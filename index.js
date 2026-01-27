const fs = require("fs");

function readthefile() {
    fs.readFile("a.txt","utf-8",function(err, data) {
        console.log(data);
    })
}

function promise () {
    return new Promise (readthefile)
}

p = promise()

function callback(open) {
    console.log(open);
}

p.then(callback);


 







     