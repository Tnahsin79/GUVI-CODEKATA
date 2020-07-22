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
var n = parseInt(userInput[0]);
 var d = userInput[1].split(" ");
 var s=0;
  for(var i=0;i<n;i++)
    s+= parseInt(d[i]);
  if((s%2==0)&&(s%3==0)&&(s%5==0))
    console.log("1");
  else
  console.log("0");

});
