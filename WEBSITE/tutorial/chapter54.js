//Promises
/*
object hat encapsulates the result of an asynchronous operation
let asynchronous methods return synchrounous methods 
'I Promise to return something in the future'
*/

/*

    The STATE is 'pending' then: 'fulfilled' or 'rejected'
    the RESULT is what can be returned
    2 parts producing & consuming


*/


const promise  = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if(fileLoaded){
        resolve('File loaded');
    }
    else{
        reject("File not loaded");
    }
})

promise.then((value) => console.log(value))
        .catch((errors) => console.log(errors)); //to catch the reject



const newPromise = new Promise((resolve) => {
    setTimeout(resolve, 2000);
});

newPromise.then((value) => console.log('Thanks for waiting'));

const wait = (time) =>new  Promise((resolve) => {
    setTimeout(resolve, time);
})

wait(2000).then((resolve => {
    console.log("Thanks for waiting");
})).catch((errors) => console.log(errors));