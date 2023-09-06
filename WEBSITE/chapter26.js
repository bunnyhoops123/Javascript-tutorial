//toLocaleString() = returns a string with a language
//                   sensitive representation of this 

// number.toLocaleString(locale, {options});

//'locale' = specify that language (undefined = defalut)
//'options' = object wiht formatting options 

let myNum = 123467899.567;

//try with US,UK, IN
// myNum = myNum.toLocaleString("en-IN");//INDIA english
// myNum = myNum.toLocaleString("hi-IN");//hindi
// myNum = myNum.toLocaleString("de-DE");//standard German

myNum = myNum.toLocaleString("en-IN",{style:"currency", currency: "USD"});
myNum = myNum.toLocaleString("hi-IN",{style:"currency", currency: "INR"});

console.log(myNum);