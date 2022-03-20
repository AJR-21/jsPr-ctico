let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)); //el 2 esel valor de la profundidad del array

let array1 =[1,2,3,4,5];

console.log(array1.flatMap(value => [value, value*2]));

let hola = '            hola mundo';
console.log(hola);
console.log(hola.trimStart());//el trimSart elimina los espacios en blanco

let hola2 = 'hola mundo       '
console.log(hola2);
console.log(hola2.trimEnd()); //trimEnd elimina espacios en blancos finales

try {
    
} catch {
    Error;
}

let entries = [['name', 'Oscar'], ['age', 23]];
console.log(Object.fromEntries(entries));

let mySimbol = 'My symbol';
let symbol = Symbol(mySimbol);
console.log(symbol.description);