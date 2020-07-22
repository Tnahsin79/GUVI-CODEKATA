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
 var w = parseInt(userInput[2]);
  var t = [];
  var k=0,f;
  for(var i=0;i<=(n-w);i++)
  {
    f=0;
  	for(j=0;j<w;j++)
      if(d[i+j]<0)
        { t[k]=d[i+j]; k++; f++; break;} 
    if(f==0)
      { t[k]=0; k++;}
  }
  console.log(...t);

});
