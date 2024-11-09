var prompt = require('prompt-sync')();
const age = prompt("Enter your age: ");
if(age<18){
    console.log("not eligible");
}
else{
    console.log("eligible");
}