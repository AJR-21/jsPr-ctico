//js versión antigua
function myFuction1(name, age, country){
    var name = name || "Alex";
    var age = age || 23;
    var country = country || "Perú";

    console.log(name, age, country);
}

//js6+
//en caso no le pongas ningún parámetro, la función inicializada va
//arrojar los valores por defecto que se puso en la función
function myFunction2(name = "Alex", age = 23, country = "Perú"){
    console.log(name, age, country);
}

myFunction2();
myFunction2("Andy", 14, "Brazil");

//templets literal

//js antiguo
let h1 = "hello";
let h2 = "World";
let unir = h1 + h2;

console.log(unir);

//js6
let union = `${h1} ${h2}, I am Alex`;
console.log(union);

//multilineas
//js antiguo
let lorem = "bdv buidj dscndoidcnsc  jcnd cuuewcb c \n"
+ "esto es otra línea";
console.log(lorem);

//js6
let lorem2 = `esto es la primera frase
y esta es la segunda línea`;
console.log(lorem2);

//js antiguo
let myObjet = {
    'name':'Alex',
    'age': '23',
    'country': 'Perú'
}
console.log(myObjet.name, myObjet.age);

//js6
let { name, age, country } = myObjet;
console.log(name, age,country);

//mejoras en arrays
let team1 = ['Alex', 'Mayra', 'Brand'];
let team2 = ['Liz', 'Luis', 'Andy'];

let todos = ['Dani', ...team1, ...team2];
console.log(todos);

//let solo es accesible dentro de un scope o bloque
{
    var globalVar = 'globar var';
}
{
    //el let solo existe dentro de este bloque
    let globalLet = 'global let';
}
console.log(globalVar);
console.log(globalLet);

//const los valores ya no se pueden modificar una vez ya inicializados
