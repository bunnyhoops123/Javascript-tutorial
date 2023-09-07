//Object = A group of properties and methods


const car ={
    model:"Mustang",
    color:'red',
    year:2023,

    drive: function(){
        console.log("you drive the car");
    },
    brake: function(){
        console.log('you pressed on the brakes');
    }
}

console.log(car.year);
car.drive();