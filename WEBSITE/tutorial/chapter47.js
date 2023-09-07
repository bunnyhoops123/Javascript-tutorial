//classes == blueprint for creating an object

class Player{
    score = 0;
    pause(){
        console.log("you Paused the game");

    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 =new Player();
player1.score += 1;


console.log(player1.score);