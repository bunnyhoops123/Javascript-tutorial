//synchronus code = In an ordered sequence.
//                  Step-by-Step linear instructions
//                   (start now, finish now)

//asynchronous code = Out of sequence
//                  Ex. Access a database
//                      Tasks that take time
//                      (start now, finish sometime later)

console.log('Start');
setTimeout(() => console.log("this is asynchronous."), 5000);
console.log("synchronous");
console.log("end");