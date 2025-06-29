// let car = {
//     carName:"range rover",
//     model:"velar",
//     engineName:"turbo v-8",
//     carWeight: 80,

//     startCar: function (){
//     console.log("Vroooom")
// },

//     driveCar:function (){
//     console.log("Voooooo")
// },

//     brakeCar:function (){
//     console.log("Krrrrrr")
// },

//     stopCar: function (){
//     console.log("car has stopped")
// }
// };
// console.log(car);
// console.log(car.carName,
// car.model,
// car.engineName,
// car.carWeight,
// )

// car.startCar();
// car.driveCar();
// car.brakeCar();
// car.stopCar();

let farmer = {
    name: "Magdalene",
    age:"23",
    isRegistered: true,

    greetFarmer:function(){
        console.log("Welcome"+" "+ this.name+"!")
    },

    requestChicks:function(quantity){
        console.log(this.name +" "+ "requested for"+" "+quantity+" "+"chicks")
    }
}
console.log(farmer.age)
farmer.greetFarmer();
farmer.requestChicks(100);



// let startCar=function (){
//     console.log("Vroooom")
// }

// function driveCar(){
//     console.log("Voooooo")
// }

// function brakeCar(){
//     console.log("Krrrrrr")
// }

// function stopCar(){
//     console.log("car has stopped")
// }
