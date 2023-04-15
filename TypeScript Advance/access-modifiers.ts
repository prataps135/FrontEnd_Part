class Person1 {
    // public protected private readonly
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): string {
        return `Hello ${this.name}`;
    }
}

class Hero1 extends Person {
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

let myPerson1 = new Hero("Pratap");
myPerson.addPower("Lion");
console.log(myPerson1.listPowers());