// const = a variable that can't be changed

let radius;
const PI = 3.14;

radius = window.prompt("Enter the radius of circle");
radius = Number(radius);


// PI = 789           Since PI is set constant it can't be changed

area = PI * radius * radius;

console.log("The area of circle is", area);