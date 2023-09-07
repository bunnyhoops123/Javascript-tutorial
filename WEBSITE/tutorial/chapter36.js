//array.map() = executes a callback once for each array element and creates a new array


let number = [1,2,3,4,5];
let squares = number.map(square);
squares.forEach(print);
let cubes = number.map(cube);
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}