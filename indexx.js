/*console.log("I Like Pizza!");
console.log("It's really good!");
window.alert("Welcome to my page");

//This is a comment. 

This is a
multiline comment


//A variable is a container for storing data
//a variable behaves as if it was the value it contains

//two steps:
//1. Declaration (var,let, const)
//2. Assignment (= assignment operator)

let age = 21;

age = age + 1;

console.log(age);*/

let firstname = "Ashu" //string
let age = 21;  //number
let student = "False" //boolean


console.log("Hello", firstname);
console.log("You are", age ,"years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;