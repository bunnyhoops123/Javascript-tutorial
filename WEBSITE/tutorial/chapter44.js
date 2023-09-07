//Map = object that holds key:value pair of any data type

const store = new Map([
    ['t-shirt', 20],
    ['jeans', 30],
    ['socks', 10]


]);

let shoppingCart = 0;
shoppingCart += store.get('t-shirt');

store.set("hat", 40);//add data
store.delete('hat');
store.has('hat'); //returns bool
store.size; //returns number of keys


store.forEach((value, key) => console.log(  `${key} $${value}`));