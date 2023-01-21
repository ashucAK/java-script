// switch = many case clauses 
// more efficient than else if statement

let a = 95;

switch(true){
    case a >= 90:
        console.log("You got O grade");
        break;
    case a >= 80:
        console.log("You got A+ grade");
        break;
    case a >= 70:
        console.log("You got B+ grade");
        break;
    case a >= 60:
        console.log("You got E grade");
        break;
    default:
        console.log("Nikal ja too idhar se");
}