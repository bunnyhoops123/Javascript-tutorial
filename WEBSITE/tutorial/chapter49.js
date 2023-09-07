//inheritence = a child can inherit all the methods and properties
//             from another class


class Animal{
    alive = true;
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
    jump(){
        console.log(`${this.name} is jumping`);
    }
}
class Fish extends Animal{
    name = "Fish";       
    swim(){
        console.log(`${this.name} is swiming`);
    }
}
class Hawk extends Animal{
    name = "Hawk";       
    swim(){
        console.log(`${this.name} is flying`);
    }
}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

rabbit.jump();
rabbit.eat();