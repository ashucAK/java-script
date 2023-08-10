// Template literals delimited with (`) instead of double or single quotes allows embedded variables and expressi

let userName = "Bro";

let items = 3;

let total = 75;

console.log("Hello", userName);

console.log("You have", items, "items in your cart"); 

console.log("Your total is $", total);

console.log(`Hello ${userName}`);

console.log(`You have ${items} items in your cart`);

console.log(`Your total is $${total}`);

let text = `Hello ${userName}
You have ${items} items in your cart
Your total is $${total}`;

//console.log(text);
document.getElementById("mytemple").innerHTML = text;