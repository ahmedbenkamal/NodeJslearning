var readingFile= require('fs');
var read=function read(){
    console.log("readingstart");
    return new Promise ((resolve,reject)=>{
        readingFile.readFile("FileToRead.txt",{encoding:'utf8',flag:'r'},(err,data)=>{
            resolve(data);
            console.log("readingfinish");
          })

        })
    
    }
 module.exports={
read:read

 };   

    








