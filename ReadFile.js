
module.exports={
readfile_rev01 :function  (callbackf){
    console.log("reading has been started");
var readingFile= require('fs');

 var Datafromreadingfile =readingFile.readFile("FileToRead.txt",{encoding:'utf8',flag:'r'},(err,data)=>{
 callbackf(err,data);
    console.log("Reading has been finsished");    
 })


}

}



