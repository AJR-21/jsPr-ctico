const precio = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDescuento = 100 - descuento;
    return precio*porcentajeDescuento/100;

    //console.log("El precio a pagar es: " + precioFinal);

}

function calcularDescuento(){
    const inputPrecio = document.getElementById("precio");
    const precioValor = inputPrecio.value;

    const inputDescuento = document.getElementById("porcentajeDescuento");
    const descuentoValor = inputDescuento.value;

    const precioUltimo = calcularPrecioConDescuento(precioValor, descuentoValor);

    var resultado = document.getElementById("precioFinal");
    resultado.innerText ="El precio final con descuento es: S/ " + precioUltimo;

}