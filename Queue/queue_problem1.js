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
var obj ={
    '(':')',
    '{':'}',
    '[':']'
}
var s=[],i,t,f=0,l,c=0;
l=n.length;
 if(n[0]===')'||n[0]==='}'||n[0]===']'||l%2!==0)
 { 
     //console.log("no");
 f=1; }
 else
 for(i=0;i<n.length;i++)
 {
     if(n[i]==='('||n[i]==='{'||n[i]==='[')
     s.push(n[i]);
     else
     {
         t=s.pop();
         if(obj[t]!==n[i])
         { //console.log("no"); 
         f=1; break; }
         else
         c+=2;
     }
 }
 if(c>0)
 console.log(c);
 else
 console.log("-1");
 
});
