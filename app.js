/*let myTeam = 'Max, Orkun';
console.log(myTeam);*/

let getYearOfBirth = (age) => (2020 - age);

function yearOfBirth(age){
    if(age < 0){
        throw new Error("Age can not be negative");
    }
}

function createGreeting(name, age) {
const birthYear = yearOfBirth(age);
const yob = getYearOfBirth(age);
return `I was born in ${yob}`;
}

//const yob = yearOfBirth(26);

const greeting1 = createGreeting("Max", 26);
console.log(greeting1);