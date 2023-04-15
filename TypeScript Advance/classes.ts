class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): string {
        return `Hello ${this.name}`;
    }
}

// let myPerson = new Person("John");
// console.log(myPerson.greet());

class Hero extends Person {
    superpower: string[] = [];
    constructor(name: string) {
        super(name);
    }
    addPower(power: string): void {
        this.superpower.push(power);
    }
    listPowers(): string[] {
        return this.superpower;
    }
}

let myPerson = new Hero("Pratap");
myPerson.addPower("Lion");
console.log(myPerson.listPowers());