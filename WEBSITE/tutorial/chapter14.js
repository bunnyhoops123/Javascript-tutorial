//switch = statement that examines a vlaue for a 
//          match against many case clauses.


let grade = "Pizza";

switch(grade){
    case 'A':
        console.log("You did great");
    case 'B':
        console.log("You did okay");
    case 'C':
        console.log("not acceptable in India");
    case 'D':
        console.log("Having you was a mistake!");
    case grade<10:
        console.log("Can check value or a variable");
    default:
        console.log(grade, "is not a letter grade");
}