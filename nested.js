// nested loop  a loop inside of any another loop
let symbol = window.prompt('Enter the symbol');
let r = window.prompt('Enter r');
let c = window.prompt('Enter c');

for(i = 0; i <= r; i+=1){
    for(k = 0; k <= c; k += 1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}