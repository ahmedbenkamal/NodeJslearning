
module.exports={
writeTofile: function (text){
console.log("writing has been started");    
var filewritting = require('fs');
filewritting.writeFile("FileToWrite.txt",text,()=>{
console.log("Writing has been finished");
});
}
}