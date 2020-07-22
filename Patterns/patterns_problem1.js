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
  //start-here
  //Your code goes here … replace the below line with your code logic 

  var n=+userInput[0];
  var i,j,a=[];
  var c=1;
  for(i=1;i<=n;i++)
  {
      for(j=0;j<i;j++)
      {
          a.push(c);
          c++;
      }
      console.log(...a);
      a.splice(0, a.length);
  }

  //end-here
});
