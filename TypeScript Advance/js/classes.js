class Car{
    constructor(make,colour,speed){
        this.make=make;
        this.colour=colour;
        this.speed=speed;
    }
    getMaxSpeed() {
        return `Max speed is ${this.speed} km/h`;   
    }
}

class Truck extends Car{
    getMaxSpeed(){
        return `Max Truck speed is ${this.speed} km/h`;
    }
    getMake(){
        return `This truck is ${this.make}`;
    }
}

const car = new Car("BMW","black",250);
const truck = new Truck("TATA","Black",80);
console.log(car.getMaxSpeed());
console.log(truck.getMaxSpeed());
console.log(truck.getMake());