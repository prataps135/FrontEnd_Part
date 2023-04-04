class Car{
    constructor(x,y){
        console.log("This is Car constructor.");
        console.log("This is x = "+x);
        console.log("This is y = "+y);
    }
}
var a = 10, y = 20;
var obj = new Car();
var obj1 = new Car(a,y);