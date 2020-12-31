readfile= require('./ReadFile');
Writefile=require('./WriteFile')


//async function asyncall(){
var data;
 var ex= readfile.readfile_rev01(function(err,content){
    Writefile.writeTofile(content); 
    //data=content
});

// }
//asyncall();

