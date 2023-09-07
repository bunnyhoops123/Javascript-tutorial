//this = reference to the particular object


const car ={
    model:"Mustang",
    color:'red',
    year:2023,

    drive: function(){
        console.log(`you drive the ${this.model}`);
    },
    brake: function(){
        console.log('you pressed on the brakes');
    }
}

console.log(car.year);
car.drive();