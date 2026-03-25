/*Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
fueron pares y cuántos impares.*/


function esPar(numero) {
    return numero % 2 === 0;
}

function contarNumeros() {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i}:`));

        if (esPar(numero)) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

function mostrarResultado(resultado) {
    console.log(`Cantidad de números pares: ${resultado.pares}`);
    console.log(`Cantidad de números impares: ${resultado.impares}`);
}


let resultado = contarNumeros();
mostrarResultado(resultado);