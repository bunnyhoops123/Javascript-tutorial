//callback = a function passed as an argument
//              to another function
//Ensures that a function is not going 
//to run before task is executed
//Helps us develop asynchronous code

let total = sum(2,3 ,displayConsole);


function sum(x, y, callback){
    let result = x + y;
    callback(result);
}

function displayConsole(output){
    console.log(output);
}