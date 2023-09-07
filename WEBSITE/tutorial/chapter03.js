/* 
    arithmetic expression is a combination of ...
    operands (values, variables, etc.)
    operators (+ - * /)
    that can be evaluated to a value
    ex. y = x + 5;
*/
let students = 20;

students = students +1;
students = students -1;
students = students *2;
students = students /2;

//Return remainder after division. Modulo operator
students = students %3; 

//Augmented assigmnet 
students +=1; //same as students = students + 1;

/*
    operator precedence
    1. parenthesis()
    2. exponents
    3. mulitplicaiton & division
    4. addition & subtraction
*/
console.log(students);