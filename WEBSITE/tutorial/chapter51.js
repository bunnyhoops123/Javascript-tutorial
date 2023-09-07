//get = binds an object property to a function
//      when that property is accessed
//Set = binds an object property to a function when
//      that property is assigned to a value.

class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return this._power + " Hp";
    }
    get gas(){
        return this._gas + ` L (${this._gas / 50 * 100}%)`;
    }
    set gas(val){
        if(val >50){
            this._gas = 50;
        }
        else if(val<0){
            this._gas = 0;
        }
        
    }
}

let car = new Car(400);
car.gas = 100;
car.gas = -10;

console.log(car.gas);