console.group("Cuadrado");
//código del cuadrado
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado +  " cm");

function perimetroCuadrado(lado) {
    return lado*4;
}
//console.log("El perimentro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado**2;
}
//console.log("El área del cuadro es: " + areaCuadrado + " cm^2");
console.groupEnd();

console.group("Triángulos");
//código del triangulo

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const base = 4;
//const altura = 5.5;
//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm," + 
 //ladoTriangulo2 + " cm y " + base + " cm.")

function perimetroTriangulo( lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return base*altura/2;
}
console.groupEnd();

//código del círculo
console.group("Círculo");
//const radio = 4;
//console.log("El radio del círculo es: " + radio + " cm");

function diametroCirculo(radio){
    return radio*2;
}
//console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

const pi = Math.PI;
console.log("El valor del pi es: " + pi);

function perimetroCirculo(radio){
    return diametroCirculo(radio)*pi;
} 
//console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

function areaCirculo(radio){
    return radio**2*pi;
} 
//console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const valorLado = input.value;
    alert(perimetroCuadrado(valorLado) + " cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const valorLado = input.value;
    alert(areaCuadrado(valorLado) + " cm^2")
}

function calcularPerimetroTriangulo(){
    const inputlado1 = document.getElementById("lado1");
    const inputlado2 = document.getElementById("lado2");
    const inputbase = document.getElementById("base");

    const lado1 = inputlado1.value;
    const lado2 = inputlado2.value;
    const base = inputbase.value;

    const perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base);

    alert (perimetro + " cm");
}
function calcularAreaTriangulo(){
    const inputbase = document.getElementById("base");
    const inputaltura = document.getElementById("altura");

    const base = inputbase.value;
    const altura = inputaltura.value;

    alert (areaTriangulo(base, altura) + " cm^2");
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("radio");
    const valorRadio = inputRadio.value;

    alert(perimetroCirculo(valorRadio) + " cm")
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("radio");
    const valorRadio = inputRadio.value;

    alert(areaCirculo(valorRadio) + " cm^2")


}

//comprando si un triangulo es isóeceles o no

function trianguloIsoceles(lado1, lado2, lado3){
    if (lado1 == lado2 || lado1 == lado3 || lado1 == lado3){
        console.log("Los valores coresponden a un triángulo is+oceles");
    
    } else {
        console.log("No es triángulo isóceles")
    }
    if (lado1 === lado2){
        var altura1 = (lado1**2-(lado3/2)**2)**(1/2)
        console.log("la altura del triángulo es: " + altura1);
    } if (lado2 === lado3){
        var altura2 = (lado2**2-(lado1/2)**2)**(1/2)
        console.log("la altura del triángulo es: " + altura2);
    } if (lado1 === lado3){
        var altura3 = (lado1**2-(lado2/2)**2)**(1/2)
        console.log("la altura del triángulo es: " + altura3);
    }

}
