
// declaring array
const namesArray = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

//problem 1 : Convert all String to lowercase
const namesWithLowercase = namesArray.map((name) => name.toLowerCase());

console.log(namesWithLowercase);


//Problem 2 : Print string that has length more than 11
const namesWithMoreLength = namesArray.filter((name) => name.length > 11);

console.log(namesWithMoreLength);

//Problem 3 : Reverse the string in the given array
function reverseString(str) {
  let reversedStr = [];

  for (let i = 0; i < str.length; i++) {
    let newStr = str[i].split("").reverse().join("");
    reversedStr.push(newStr);
  }
  return reversedStr;
}


//call back function
function strArray(callback, str) {
  return callback(str);
}

console.log(strArray(reverseString,namesArray));

//Problem 4: Display Winner

function runners(speed,name){
    let runner=[];
   for(let i=0;i<speed.length;i++){
         runner[i] = [speed[i],name[i]]
   }

   let finalRunner = runner.sort();
   let l = finalRunner.length-1;

   
   return displayWinner(finalRunner[l],finalRunner[l-1],100);
}

function displayWinner (runner1, runner2, raceDistance){
    let winner;

    if(runner1[0] === runner2[0]) return "It's a  tie!!" ;

    winner= (runner1[0] > runner2[0]) ?  runner1[1] : runner2[1] ;

    return `${winner} is a Winner in ${raceDistance} race distance`;
}

let race = {
    name:["fizz","buzz","fizzBuzz"],
    speed:[5,6,4]
}

console.log(runners(race.speed,race.name));