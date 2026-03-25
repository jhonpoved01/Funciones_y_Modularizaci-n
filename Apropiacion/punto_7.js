/*sume los números del 1 al 100, pero interrumpa el
ciclo si encuentra un número mayor a 90 que sea par.*/


let suma = 0;

for (let i = 1; i <= 100; i++) {
    if (i > 90 && i % 2 === 0) {
        console.log(`Se encontró un número mayor a 90 y es par: ${i}`);
        break;
    }

    suma += i;
}

console.log(`La suma es: ${suma}`);
