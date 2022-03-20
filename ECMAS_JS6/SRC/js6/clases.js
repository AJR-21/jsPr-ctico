class calculadora {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculadora();
console.log(calc.sum(4,5));
const cal2 = new calculadora();
console.log(cal2.sum(45,89));

import { hola } from './modulo';

hola();

//generadores
function* holaMundo(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'world ';
    }
};

const generadorHola = holaMundo();
console.log(generadorHola.next().value);
console.log(generadorHola.next().value);
