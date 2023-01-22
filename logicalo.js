// Gives us the ability to check more than 1 condition concurrently

// && AND (BOTH conditions must be true)

// || OR (Either condition can be true)

/*
let temp = 15;
let sunny = false;

if(temp > 0 && temp< 30 && sunny){
    console.log('The weather is good!');
}
else{
console.log('The weather is bad!');
}*/

// NOT logical operator

// typically used to reverse a condition's boolean value // true -> false false -> true

/*
let temp = 15;

let sunny = false;

if(!(temp> 0)){
console.log("It's cold outside");
}
else{
console.log("It's warm outside");
}
if(!sunny){
console.log("It's cloudy outside");
}
else{
console.log("It's sunny outside");
}*/
/*
// while loop = repeat some code

// while some condition is true

// potentially infinite


let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt ("Enter your name");
}
console.log("Hello", userName);
*/

// do while loop = do something,

// then check the condition, repeat if condition is true

let userName;

do{
    userName = window.prompt("Enter Your name");
}while(userName == "")
console.log("YOO", userName);




