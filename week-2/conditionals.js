//if
// if else
// if else if else
// switch
// tenary operator(only use when needed, esp for short codes)

//check and do
if (condition){
    //this part of the code runs if truthy

}

// do this or that
if (condition){
    //this part of the code runs if truthy

}else{
    //runs if falsy
}

//alot of choices
if(condition){

}
else if(condition2){
//this part of the code runs if truthy
}else{
//runs if falsy
}

//switch
//for menus
switch(expression){
    case value:
    //code block
    break;
    case value:
    //code block
    break;
    default:

}

//ternary operator-shorter if else
condition ? expressionIfTrue : expressionIfFalse
//only use if mastered

// if examples
// decide if no is positive or negative
let number = 3;
if (number > 0){
    console.log(number+" "+ "is positive")
}

let age=20;
if (age>=20 && age<=30){
    console.log(age+"Eligible for chick request")

}

if (age>=18){
    console.log("adult")
}

// if else example
let number2 = prompt(`Please nter a number: `);
if (number > 0){
    console.log(`${number2} is positive`);
    alert(`${number2} is positive`);

}else{
    console.log(`${number2} is negative`);
    alert(`${number2} is negative`);
}

// if else if else example
if (number > 0){
    console.log(`${number2} is positive`);
    alert(`${number2} is positive`);

}
else if(number < 0){
    console.log(`${number2} is negative`);
    alert(`${number2} is negative`);
}else{
    alert(`Number is zero`);
    console.log(`${number2}`);

}

let quantity = prompt(`Please enter desired quantity:`);
if (quantity >=100 && quantity <= 500){
    alert(`Request accepted`);
}
else{
    alert(`Invalid quantity. Enter a quantiity between 100 and 500`);
}


//switch examples
let num = prompt(`Enter number: `);
switch(true){
    case num > 0:
        alert(`${num} is positive.`);
        console.log(`${num} is positive.`);
        break;
    case num == 0:
        alert(`${num} is zero`);
        console.log(`${num} is zero`);
        break;

     case num < 0:
        console.log(`${num} is negative`);
        alert(`${num} is negative`);
        break;
    default:
        alert(`${num} is invalid.`);
        console.log(`${num} is invalid.`);
}

let dayInput = prompt(`what day is it today?:`)
let day = dayInput.toLocaleLowerCase();

switch(true){
    case `monday`:
        alert(`today is monday`);
       
        break;
    case `tuesday`:
        alert(`today is tuesday`);
        
        break;

     case `wednesday`:
        alert(`today is wednesday`);
        
        break;
    default:
        alert(`office is closed`);
       
}
