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
var f = [];
  var a=1000,c,s=0;
  f[0]=1000;
  f[1]=f[0]+a;
  for(var i=2;i<=n;i++)
  {
    f[i]=0;
    	for(var j=0;j<i;j++)
        f[i]+=f[j];
  }
  console.log(f[n]);

});
