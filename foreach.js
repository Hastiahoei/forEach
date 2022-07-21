const myArray = [21, 54, 87, 98, 65, 32];

myArray.forEach((value,index,arr) => {
    console.log("value" , value);
    console.log('index', index);
    console.log('arr', arr);

    value = 100;
console.log(" ");

})
myArray.forEach(myFunction);

 console.log(myArray);


//array
let maennlich = ['Ralf', 'Erwin', 'Jürgen', 'Harald', 'Stefan'];
let weiblich = ['Erika', 'Julia', 'Rosamunde', 'Melanie', 'Jasmin'];
let nachnamen = ['Schmidt', 'Müller', 'Meyer', 'Schulz', 'Kowalski'];

const zufallErzeugen = (min, max) => ~~(Math.random() * (max - min + 1) + min);

const zufallsAuswahl = (sammlung, anzahl) => {
    let auswahl = [];
    sammlung = [...sammlung];
    for (let i = 0; i < anzahl; i++) {
        auswahl.push(sammlung.splice(zufallErzeugen(0, sammlung.length - 1), 1)[0]);
    }
    return auswahl;
}

let name = zufallsAuswahl(weiblich, zufallErzeugen(1,2)).join('-');
name += ' ';
name += zufallsAuswahl(nachnamen, zufallErzeugen(1,2)).join('-');

console.log(name);
