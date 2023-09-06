//Loop through an array


let prices = [5,10,15,20];

for(let i=0;i<prices.length;i++){
console.log(prices[i]);
}

//iterate backwards
for(let i= prices.length-1;i>=0;i--){
    console.log(prices[i]);
}


//OR use this method
for(let price of prices){
    console.log(price);
}