
// Problem 1: Function to convert to upper case
const StrToUpper = (str) => {
    return str.toUpperCase();
}

console.log(StrToUpper('welcome'));

//Problem 2: function to display product
const values = (a,b) => product(a,b);

const product = (a,b) =>{
  return a*b;
}

console.log(values(3,7))

//Problem 3: function takes two numbers as input and return object

function add(a,b){
    let arg1 = a+2;
    let arg2 = b+4;
    console.log("1."+arg1);
    console.log("2."+arg2);
    return {arg1,arg2}
}

add(5,5);