// five ways of creating objects

//Example 1 using {} or object literals:

// const myObject = {

//     property1 : "value1",
//     property2 : "value2",
//     method1 : function(){
//         console.log("hello from method1");
//     }
// }
// console.log(Object.getPrototypeOf(myObject));

//Example 2 using Object.create method() inheritance from the prototype
const animal = {
    sound : "animal sound",
    makeSound : function(){
        console.log(this.sound);

    },

    //Alternative method:
    // makeSounds(){
    //     return 'This is ${this.sound}';


    // }
}
// const dog = Object.create(animal);
// dog.sound = "woof";
// dog.makeSound();
//  console.log(dog);
// console.log(animal);

//Example 3 using Constructor functions
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// const person1 = new Person("Haydar", 35);
// const person2 = new Person("Oscar", 24);
// const person3 = new Person("Blaire", 30);
// const person4 = new Person("Monica", 23);
// console.log(person1);
// person1.greet();

//Example 4 using ES6 classes
// class Car{
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }
//     start(){
//         console.log(`${this.make} is starting`)
//     }
// }
// const car1 = new Car("Range Rover", "Sport");
// const car2 = new Car("Toyota", "Harrier");
// const car3 = new Car("Bugatti", "Chiron");
// console.log(car1);
//car1.start();

//Example 5 using factory function to return an object
function createProduct(name, price){
    return{
        name: name,
        price: price,
        displayInfo: function(){
            console.log(`Product: ${this.name}, Price: ${this.price}`);
        }
    }
}
const product1 = createProduct("Laptop", 999);
const product2 = createProduct("Smartphone", 699);
product1.displayInfo();//Output: Product: Laptop, Price: $999

//encapsulation
//helps in data hiding

//inheritance
class Animal{ //parent class
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal{
    // constructor(breed){
    //     super(breed); // call the constructor of the parent class
    // }
    speak(){
        console.log(`${this.name} barks.`);
    }
}
let daisy = new Dog("Daisy");
daisy.speak();//Output: Daisy barks

//polymorphism
//methods of the class got same name but behave differently

class User {
    login(){
        console.log("User logged in");
    }
}
class Host extends User {
    login(){
        console.log("Host logged in with elevated privileges");
    }
}
let newHost = newHost();
newHost.login();//Output: Host logged in with elevated privileges

//used in decision making just as if else statements

//abstraction
//hiding the complex implementation details and showing only the essential features of the object
//example of abstraction is a car. You can drive it without knowing how the engine works.

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model1;
    }

    start(){
        console.log(`The ${this.make} ${this.model} is starting.`);
    }

    stop(){
        console.log(`The ${this.make} ${this.model} is stopping.`);
    }
}