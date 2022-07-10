var readline = require('readline-sync');
let n =readline.question('Enter the property name:');
let dict={"name":"Raju", "marks":56}
for (i in dict){
if (i==n){
    console.log("exists");
    break
}else{ 
    console.log("not exist");
    break
}
}