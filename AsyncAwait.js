readfile= require('./ReadFile');
Writefile=require('./WriteFile')

 async function AsyncCall (){
     console.log("starting asyncall")
let data;
    var read= await readfile.readfile_rev01(function(err,content){
        console.log("copy of data to var started");
        data=content;
        //console.log(data);
        console.log("copy of data to var finished ");
    })
    //console.log(data+"test data");
    var write=  await Writefile.writeTofile(data);

    console.log("finsihed asyncall")
}





AsyncCall();
