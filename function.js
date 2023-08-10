// function - define a code and use it many times
//  to perform some code call the function name

/*beginning();

function beginning(){
    let name = "Ashish";
    let gender = "Male";

    ending(name,gender);
}

function ending(name,gender){
    console.log("Hi my name is", name);
    console.log(gender);
}
*/

// return  it returns the value back to place where you invoked it up

let radius;
let pi;
let circumference;

radius = window.prompt("Enter radius");
pi = window.prompt("Enter pi");

circumference = circ(radius,pi);
console.log("Circumference of circle is", circumference);

function circ(radius,pi){
    return 2 * pi * radius;
}