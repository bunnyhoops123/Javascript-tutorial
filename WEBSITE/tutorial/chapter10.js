//String propetries and methids

let userName = "Sumukh Varma";

console.log(userName.length);
console.log(userName.charAt(0)); //return char at 0th index of the variable 
console.log(userName.indexOf('u'));
console.log(userName.lastIndexOf('u'));


userName = "    Sumukh   ";
console.log(userName.trim());
userName.toUpperCase();
userName.toLowerCase();


phoneNumber = "123-456-789";
phoneNumber = phoneNumber.replaceAll('-','');
console.log(phoneNumber);