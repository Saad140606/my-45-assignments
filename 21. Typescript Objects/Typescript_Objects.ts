
// Write a program that creates Objects containing these items.

// let person_Name :string = 'Saad';
// const personName_Array :string[] = ['Person','Car','Cold Drink'];


interface person {
    age: number,
    name: string,
    nationality: string,
    Student: Boolean
}
// person object
let person = {

    age: 17 ,
    name: 'Saad',
    Nationality: 'Pakistan' ,
    Student: true

}
// print person
console.log(person);

// Datatype of car object
interface car {
    maker: string,
    color : string,
    automatic : boolean

}

// car object
let car = {
    maker : 'Toyota',
    color : 'Black',
    automatic : true
}

// print car
console.log(car);