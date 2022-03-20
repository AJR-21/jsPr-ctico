const buton = document.getElementById('boton');

buton.addEventListener('click', async function (){
    const modulo = await import('./file.js');
    modulo.hola();
});

const bigNumber = 9007199254740991n;

const otraBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(otraBigNumber);

const promese1 = new Promise((resolve, reject) => reject('reject'));
const promese2 = new Promise((resolve, reject) => resolve('resolve'));
const promese3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promese1, promese2, promese3])
  .then(response => console.log(response));

//acceder a los variables globales
console.log(window);
console.log(globalThis); //esta es la nueva forma

//?? simbolo del nulo
const foo = null ?? 'default string';
console.log(foo);


