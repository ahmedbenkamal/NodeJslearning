var testimport=require('./ReadFileWithout');
Writefile=require('./WriteFile')

async function  call (){
console.log("readstart");
    var data= await testimport.read();
    console.log("readfinish");
    console.log("writestart");
    Writefile.writeTofile(data); 
    console.log("writefinish");
}

call();
