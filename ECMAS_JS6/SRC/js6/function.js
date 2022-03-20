//js antiguo
let name ="Alex";
let age = 23;

obj = {name: name, age: age};

//js6
obj2 = {name, age};
console.log(obj2);

const names = [
    {name: 'Alex', age: 23,},
    {name: 'Ney', age: 4,}
]
//js antiguo
let listName = names.map(
    //esto es una función anonima
    function (item){
        console.log(item.name);
    }
)

//js6
//el arrow function es una función anónima
let myArrowFunction = names.map(item => console.log(item.name));

//promesas------------------------------
const myPromesa = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("All ok!");
        } else {
            reject("Something i snot ok!");
        }
    })
}

myPromesa()
.then(Response => console.log(Response))
.then(() => console.log('Hola!'))
.catch(Error => console.log(Error));