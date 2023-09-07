//Random number game

const num1 = Math.floor((Math.random()*10))+1;//*10 means 0-10, +1 means from 1 to 10 not 0 to 10
const num2 = Math.floor((Math.random()*10))+1;

(num1==num2)?console.log("Winner"):console.log("oops");