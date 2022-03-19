//const lista1 = [100, 200, 300, 500];

//const promedio = sumaLista1/lista1.length;

function calcularPromedio(lista){
    let sumaLista = 0;

    for(let i = 0; i < lista.length; i++){
    sumaLista += lista[i]; 
    }

    const promedio = sumaLista/lista.length;

    return promedio;

}

//calculando la mediana d euna lista
function numberPar(numero){
    if(numero % 2 == 0){
        return true;
    } else {
        return false;
    }
}
function mediana(lista){
    let mediana;
    if(numberPar(lista.length)){
        let numero1 = lista[lista.length/2];
        let numero2 = lista[lista.length/2 -1];
        return mediana =(numero1 + numero2)/2;
    } else {
       return mediana = lista[parseInt(lista.length/2)];   
    }
}

//encontrnado la moda
const lista_1 = [1,2,3,1,2,2,2,3,1];

const lista1Cuenta = {};

lista_1.map(
    function (elemento){
        if(lista1Cuenta[elemento]){
            lista1Cuenta[elemento] += 1;
        } else {
            lista1Cuenta[elemento] = 1;
        }
        
    }
);

const lista1Array = Object.entries(lista1Cuenta).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length -1]

console.log("la moda es: " + moda);

//promedio ponderado
function promedioPonderado(listaNota, listaCredito){
    let productoSuma = 0;
    let sumaCredito = 0;

    for (let i = 0; i < listaNota.length; i++){
        productoSuma += listaNota[i]*listaCredito[i];
        sumaCredito += listaCredito[i];
        
    }
    return productoSuma/sumaCredito;

}
