//2D arrays = an array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrot", 'onions','potatoes'];
let meats = ['eggs', 'chicken','fish'];

let shop = [fruits, vegetables, meats];

for(let list of shop){
    console.log(list);
    for(let item of list){
        console.log(item);
    }
}

console.log(shop[0][2]);