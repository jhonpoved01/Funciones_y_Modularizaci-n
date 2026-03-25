/*Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
fueron pares y cuántos impares.*/


function par(numero) {
    return numero % 2 === 0;
}

function cont_numeros() {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i}:`));

        if (par(numero)) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

function mostrar_mesultado(resultado) {
    console.log(`Cantidad de números pares: ${resultado.pares}`);
    console.log(`Cantidad de números impares: ${resultado.impares}`);
}


let resultado = cont_mumeros();
mostrar_resultado(resultado);