var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good, corn ist life");
console.log(fs.readFileSync("corn.txt").toString());
console.log("Done");

var path = require('path');
var websiteHome = "Desktop/tip/this/is/a/website.html";
var websiteAbout = "Desktop\good\night\or\what";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

console.log(__dirname);
console.log(__filename);

