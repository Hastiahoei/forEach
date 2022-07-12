//map
const myArray = [21, 54, 87, 98, 65, 32];

const newArray = myArray.map(el => el * 2);

console.log(myArray);
console.log(newArray);

//filter methode

const myArray = [21, 54, 87, 98, 65, 32];
const newArray = myArray.filter(value => value > 50);

console.log(myArray);
console.log(newArray);

//reduce

const myArray = [21, 54, 87, 98, 65, 32];
let sum = myArray.reduce((sum, value) => sum + value);
console.log(sum);

const myArray = [{
    name: 'ali',
    alter: 40
}, {
    name: 'hasan',
    alter: 20
}, {
    name: 'mona',
    alter: 100
}, {
    name: 'mani',
    alter: 55
}, {
    name: 'sahar',
    alter: 38
}];


let sum = myArray.reduce(
    (sum, value) => sum + value.alter,
    0
);
console.log(sum / myArray.length);


//indexOf


const myArray = [21, 54, 87, 98, 65, 32, 98];

let erg = myArray.includes(98);
console.log(erg);

erg = myArray.indexOf(98);
console.log(erg);

erg = myArray.indexOf(99);
console.log(erg);

erg = myArray.indexOf(98, 4);
console.log(erg);

erg = myArray.some(val => val > 90);
console.log(erg);

erg = myArray.every(val => val > 90);
console.log(erg);
