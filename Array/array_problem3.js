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
//console.log(d);
  var t = [];
  var k=1,f;
 t[0]=d[0];
  for(var i=1;i<n;i++)
  {
  	f=0;
    for(var j=0;j<t.length;j++)
      if(d[i]==t[j])
      {f++; break;}
      if(f===0)
      { t[k]=d[i]; k++;}
  }
  
  console.log(...t);

});
