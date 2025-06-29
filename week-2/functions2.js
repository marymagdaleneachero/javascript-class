function greetFarmer(){
    console.log(`Hello, Welcome to young4chickS platform`);
}
greetFarmer();

function submitRequest(){
    console.log("Your chick request has been submitted");
    // alert("Your chick request has been submitted");
}

submitRequest();

function calculateTotalCost(quantity, pricePerChick ){
    return quantity * pricePerChick;
}
console.log(calculateTotalCost(100,1650));

let total = calculateTotalCost(100,1650);
console.log(total);

function getApprovalStatus(requestedChicks){
    if (requestedChicks <= 500){
        return "Approved";
    } else {
        return "Rejected";
    }
}

let status = getApprovalStatus(300);
//console.log("Request status: " + status)
console.log("Request status: " + getApprovalStatus(300));

//Expression function or anonymous function
let greetFarmers = function (farmerName){
    console.log("Hello"+" "+ farmerName +","+ " "+"Welcome to young4chickS platform");
}
greetFarmers("Maggie");
greetFarmers("Sanyu");
greetFarmers("Wanadi");
greetFarmers("Melchizedek");

//Arrow function
let greetFarmers1=(farmerName) => console.log("Hello"+" "+ farmerName +","+ " "+"Welcome to young4chickS platform");
greetFarmers("Maggie");
greetFarmers("Sanyu");
greetFarmers("Wanadi");
greetFarmers("Melchizedek");

//callback functions(old javascript)(function taking in another function)
function processTheMoney(callback){
    callback()  
}
processTheMoney(function(){
    console.log("Colleagues the money is coming")
});

//function that returns another function
function greetFarmer(farmerName){
    return function(){
         console.log("Hello"+" "+ farmerName+","+" "+ "Welcome to young4chickS platform");

    }
}
let greet = greetFarmer("Maggie");
greet();

function school(career){
    return function(){
        console.log("Hello"+" "+ career+","+" "+ "Welcome to young4chickS platform")
    }
}
let createDoctor = school("Doctor");
createDoctor();
let createLawyer = school("Lawyer");
createLawyer();