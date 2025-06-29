//for loop-Use when you know how mnay times you want to repeat a task or iterate
for(initialization, condition, increment/decrement){
//code goes here
}

//while loop-if you don't know the number of iterations
//initialization
while(condition){
//code goes here
increment/decrement
}

//do while loop-if you want to do sthg atleast once, then ask questions later
//initialize
do{
    //code here
    increment/decrement
   } while(condition)

//for loop examples
//for (x=6;x>=1;x--)-decrement from 6 going down
for(let x = 0; x < 6; x++){
    console.log(x);
    //output 0 1 2 3 4 5

}
for (let x = 1; x <= 12; x++){
    console.log(`${x}*${x} = ${x*x}`)
}
//multiplication table for primary school
const num =5;
for (let x = 1; x <= 12; x++){
    console.log(`${num}*${x} = ${num*x}`)
}

//while loop examples
let x = 0;
while(x < 6){
    console.log(x);
    x++;
}

let password;  //initialization
const correctPassword = "Magdalene123";
while(password !== correctPassword){
    password = prompt(`Enter a correct password`);

}
alert(`Access granted`)

//do while examples
let y =0;
do{
    console.log(y);
    y++;
    //code here
   //increment/decrement
 } while(y<=5);

