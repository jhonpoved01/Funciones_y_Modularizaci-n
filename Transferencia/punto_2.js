function tablaMultiplicar() {
    let continuar;
    do {
        let numero = parseInt(prompt("Ingrese un número:"));
        for (let i = 1; i <= 12; i++) {
          console.log(numero + " x " + i + " = " + (numero * i));
        }
        continuar = prompt("Desea ingresar otro número?");
      } while (continuar.toLowerCase() === "si");     
}
tablaMultiplicar();