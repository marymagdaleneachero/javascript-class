//let emailPattern;
//let ninPattern;
// let phonePattern;
// let urlPattern;
// let farmerNamePattern = /^[A-Za-z]+$/;

//Examples
let farmerName = prompt("Enter your name:");
console.log(farmerNamePattern.test(farmerName));// true if valid, false if invalid

let ninPattern = /^[A-Za-z0-9]{14}$/;
console.log(ninPattern.test("12345678901234"));

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//simpler email pattern
let emailPattern2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
