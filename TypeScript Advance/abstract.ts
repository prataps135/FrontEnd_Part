// We can not create a instance of abstract class
abstract class Human1 {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    abstract greet(): void;
}

class Person3 extends Human1{
    constructor(name:string,age:number){
        super(name,age);
    }
    greet(): void {
        console.log(`Hello ${this.name}`)
    }
}

let john = new Person3("John",34);
john.greet();