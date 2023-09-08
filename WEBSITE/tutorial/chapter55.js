//async = makes a funtion return a promise

async function fileLoaded(){
    let fileLoaded = false;
    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File not loaded yes";
    }
}

fileLoaded().then((value) => {
    console.log(value);
}).catch((value) => console.log(value));