//nested functions = functions inside another function
//                  Inner functions are hidden from outer functions
//                     Used in closures


let userName = "bro";
let userInbox = 0;

function login(){
    
    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserinbox(){
        console.log(`You have ${userInbox} new messages`);
    }
    displayUserName();
    displayUserinbox();
    
}

login();