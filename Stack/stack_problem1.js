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
var n = userInput[0];
var d=[];
var b,c,x,i;
for(i=0;i<n.length;i++)
{
    if(n[i]==='+'||n[i]==='-'||n[i]==='/'||n[i]==='*'||n[i]==='^')
    {
        b=n[i];
        c=d.pop();
        d.push(b);
        d.push(c);
    }
    else
    { d.push(n[i]); }
}
console.log(d.join("")); 
});
