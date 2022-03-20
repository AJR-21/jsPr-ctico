const obj = {
    name: 'Alex',
    age: 23,
    country: 'Peru',
};

let { name, ...all } = obj;
console.log(name);

const obj2 = {
    name: 'Andy',
    age: 15,
}
const obj3 = {
    ...obj2,
    country: 'Peru',
}

console.log(obj3);

const saludo = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(resolve('Hola mundo'), 30000)
        : reject(new Error('test error'))
    });
};

saludo()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('finalizado'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);



