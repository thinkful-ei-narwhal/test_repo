/*let myTeam = 'Max, Orkun';
console.log(myTeam);*/

function getYearOfBirth(age) {
     return 2020 - age;
}



function createGreeting(name, age) {
let englStatement = "Hi, my name is Chris and I\'m 29 years old.";
const yob = getYearOfBirth(21);
return `I was born in ${yob}`;

}

const greeting1 = createGreeting('orkun', 24);
console.log(greeting1);


const saveFunction = getYearOfBirth
