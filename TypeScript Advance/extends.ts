interface User{
    name:string,
    age:number
}
interface UserAddres extends User{
    address:string,
    // Now we can any property we want to add 
    [property:string]:any
}

let person:UserAddres={
    name:"pratap",
    age:24,
    address:"India"
}