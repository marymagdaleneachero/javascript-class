//Declaration function
function functionName(){
    // code goes here
}
functionName()

//function to add two numbers
function addTwoNumbers(){
    let num1 = 10;        //Not the ideal way but possible
    let num2 = 30;
    let sum = num1 + num2;
    console.log(sum)
}
addTwoNumbers()

//function to square a number
function square(number){   
    return number * number;    //if we use console.log outside the function, we use the return keyword.
}
console.log(square(2));
console.log(square(3));
console.log(square(4));
