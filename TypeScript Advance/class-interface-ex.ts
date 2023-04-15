interface Iper {
    name: string,
    age: number
}

interface Ihero extends Iper {
    superpowers: string[]
}

abstract class Human implements Iper {
    name: string;
    age: number;
    constructor(name:string){
        this.name=name;
    }
    abstract showAge():number;
}

class Person4 extends Human{
    constructor(name:string){
        super(name);
    }
    showAge():number {
        return this.age;
    }
}

class Hero2 extends Person4 implements Ihero{
    superpowers: string[];
    constructor(name:string){
        super(name);
    }
    addPower(power:string):void{
        this.superpowers.push(power);
    }
    listPower():string[]{
        return this.superpowers;
    }
}

let batman = new Hero2("batman");
batman.age = 33;
batman.addPower("money");
batman.addPower("batarag");
console.log(batman.listPower());