interface IPerson{
    name:string,
    greet():string;
}

class Person2 implements IPerson{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): string {
        return `Hello ${this.name}`;
    }
}