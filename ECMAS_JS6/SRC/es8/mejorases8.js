const data = {
    froentend: 'Oscar',
    backend : 'Anna',
    desing: 'Email'
}

const entries = Object.entries(data);
console.log(entries);

//objet values
const data1 = {
    froentend: 'Oscar',
    backend : 'Anna',
    desing: 'Email',//comas al final de los objetos en es8
}

const values = Object.values(data1);
console.log(values); 
console.log(values.length);

const string = 'hola';
console.log(string.padStart(7, 'hi '));

//Ayng Await
const holaMundo = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Hola mundo'), 3000)
        : reject(new Error('Test Error'));
    })
};

const holaAsyng = async () => {
    const hola = await holaMundo();
    console.log(hola);
}

holaAsyng();

const otraFunction = async () => {
    try {
        const hello = await holaMundo();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

otraFunction();
