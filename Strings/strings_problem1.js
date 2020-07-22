// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];
inp.on("line", (data) => { 
 userInput.push(data);
});

inp.on("close", () => {
//var n = parseInt(userInput[0]);
 var d = userInput[0].split(" ");
 var p=1;
 
 for(var i=0;i<d.length;i++)
 { 
     d[i]= +d[i];
    p*=d[i];    
 }
console.log(p);
 
});
