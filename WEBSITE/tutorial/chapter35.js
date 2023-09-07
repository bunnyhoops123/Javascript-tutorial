//array.forEach() = executes a provided callback function
//                  once for each  array element
//                  takes (currentValue,index, arr)
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1); //String starting from 1st index

}
function print(element){
    console.log(element);
}


