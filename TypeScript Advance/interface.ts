interface IUser {
    name: string,
    readonly age: number,
    // Specifing the address as Optional by using ?
    address?: string
}

interface IGreet {
    (name: string, message: string): string;
}

let hello:IGreet;
hello= function(name:string,message:string){
    return name+message;
}

console.log(hello("Pratap ","Hello"));

let myUser1: IUser = {
    name: "Pratap",
    age: 24,
};

//myUser1.age=26;