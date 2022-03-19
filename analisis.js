const salarioPer = peru.map(
    function(persona){
        return persona.salary;
    }
);

const salarioPerSorted = salarioPer.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function numberPar(numero){
    return (numero % 2 === 0);
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
//mediana general
function medianaSalario(lista){
    const mitad = parseInt(lista.length/2);

    if(numberPar(lista.length)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const mediana1 = mediana([personaMitad1,personaMitad2]);
        return mediana1;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGenralPer = medianaSalario(salarioPerSorted);

//media top 10%
const spliceStart = (salarioPerSorted.length*90)/100;
const spliceCount = salarioPerSorted.length - spliceStart;
const salarioTop10Per = salarioPerSorted.splice(spliceStart,spliceCount);

const medianaTop10Per = medianaSalario(salarioPerSorted);

console.log({
    medianaGenralPer,
    medianaTop10Per,
});