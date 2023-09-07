//super = Refers to the parent class.
//         Commonly used to invoke the constructor of the parent class.

class Animal{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

}
class Rabbit extends Animal{
    constructor(name, age, jumpSpeed){
        super(name, age),        
        this.speed = jumpSpeed
    }

}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age),        
        this.speed = swimSpeed
    }

}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age),        
        this.speed = flySpeed
    }

}
rabbit = new Rabbit("sumukh", 40, 40);
console.log(rabbit.name);