var inline_func = function() { 
    console.log("Timeout call ");
};
setImmediate(()=>{console.log("Timeimdeidate call ")}) 
setTimeout(()=>{console.log("Timeout call ")},0);

console.log(1+1);


