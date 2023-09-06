//arrays = think of it as a variable 
//          that can store multiple values

let fruit = ['apples','oranges','banana'];

console.log(fruit);
console.log(fruit[0]);

// fruit[0] = "coconut";
fruit.push("lemon");//add an element at the end of the array
console.log(fruit);
fruit.pop();//remove last element
console.log(fruit);
fruit.unshift("mango"); //add element at first position
console.log(fruit);
fruit.shift();// remove element at beginning
console.log(fruit);

let length = fruit.length;
let index = fruit.indexOf('apple');//if returns -1 then does not exists
