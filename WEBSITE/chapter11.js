//slice() extracts a section os a string 
//      and returns it as a new string
// wihtout modifying the original string 

let fullName = "Bro code";

let firstName;
let lastName;

firstName = fullName.slice(0,3);//inlcudes 0 but not third elemnet 
lastName = fullName.slice(4);//from 4 uptill end of string 

console.log(firstName);
console.log(lastName);