//break -> breaks out of a loop entirely 
//continue -> skips an iteraitonof a loop

for(let i=10; i<=20; i+=1){
    if(i==13){
        continue;
    }
    else if(i ==17){
        break;
    }
    else{
        console.log(i);
        }
}