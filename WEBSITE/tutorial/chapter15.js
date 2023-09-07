//&& AND (Both conditions must be true)
//|| OR (any condition can be true)

let temp = 15;

if(temp > 0 && temp < 30){
    console.log("Nice weather");
}
else{
    console.log("The weather is bad");
}

if(temp >= 0 || temp <= 30){
    console.log("Nice weather");
}
else{
    console.log("The weather is bad");
}