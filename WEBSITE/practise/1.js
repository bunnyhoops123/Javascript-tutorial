let university = {
    name: "Default",
    location: "Default"
}

let sumukh_university = Object.assign({}, university);

//this method converts all data to objects data-type, use Deep Copy for safe Copying 

sumukh_university = JSON.parse(JSON.stringify(university));

sumukh_university.name = 'RIT';
sumukh_university.location = 'bangalore';
university.location = 'India';

console.log(sumukh_university.location);
console.log(university.location);

/*
1. Normal copy:
   When you change the original object's properties, the copied object's properties will change too (and vice versa).
2. Shallow Copy:
     Top level properties will be unique for the original and the copied object.
     Nested properties will be shared across both objects though. Use the spread operator ...{} or Object.assign().
3. Deep Copy
    All properties are unique for the original and the copied object, even nested properties.
    For a deep copy, serialize the object to JSON and parse it back to a JS object.
    const a = { x: 0, y: { z: 0 } };
    const b = JSON.parse(JSON.stringify(a));  
    b.y.z = 1; // doesn't update a.y.z
 
*/

//Primitives (Numbers, Strings, booleans) are copied as a whole whereas objects and arrays:- reference is copied.

let fruits = ['mango', 'banana', 'apple'];

// new_fruits = Object(...fruits);             //wont work cause new_fruits is now an object and not an array 


//deep copy
new_fruits = JSON.parse(JSON.stringify(fruits));
new_fruits[0] = 'guava';
console.log(fruits);

new_fruits.push('grapes');
fruits.push('jackfruit');

console.log(fruits);
console.log(new_fruits);