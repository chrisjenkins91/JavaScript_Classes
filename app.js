// clases
debugger
class Car{
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelarate(mph) {
        this.speed += mph;
        console.log(`this car is going ${this.speed} mph`)
    }
    brake(mph) {
        this.speed -= mph;
        console.log(`this car is going ${this.speed} mph`)
    }
}

const shitbox = new Car ("nissan", "pathfinder");

console.log(`this car is going ${shitbox.speed} mph`);
shitbox.accelarate(20);
shitbox.brake(15);


// class Employee{
//     constructor(name, title, catchphrase) {
//         this.name = name;
//         this.title = title;
//         this.catchphrase = catchphrase;
//     }
//     introduce() {
//         console.log(
//             `Hi I am ${this.name}, I am a ${this.title}, ${this.catchphrase}`
//         );
//     }
// }

// const spongebob = new Employee("spongebob", "frycok", "I'm ready");
// const squidward = new Employee("squidward", "cashier", "I hate everyone");

// spongebob.introduce();
// squidward.introduce();

// class Animal{
//     speak() {
//         console.log("some animal noise");
//     }
//     nap() {
//         console.log("zzz");
//     }
// }

// class Dog extends Animal{
//     speak() {
//         console.log("barking");
//     }
// }
// class Cat extends Animal {
//     speak() {
//         console.log("meow");
//     }
// }

// speak();
// function speak() {
//     console.log("speak 1");
// }
// function speak() {
//     console.log("speak override");
// }