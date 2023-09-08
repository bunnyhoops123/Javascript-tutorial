// await = makes an async function wait for a promise

async function fileLoaded(){
    let fileLoaded = false;
    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File not loaded yes";
    }
}

async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message);

    }catch(e){
        console.log(e);
    }
   

}


