function cajeroAutomatico() {
    const saldoInicial = 5000;
    let saldo= saldoInicial;
    let continuar;
    do {
        console.log("Saldo actual: " + saldo);
        let retiro = parseInt(prompt("Ingrese el monto a retirar: "));
        if (retiro > saldo) {
            console.log("Saldo insuficiente. Intente nuevamente.");
        } else {
            saldo = saldo - retiro;
            console.log("Retiro exitoso. Nuevo saldo: " + saldo);
        }
        continuar = prompt("¿Desea realizar otro retiro?");
    } while (continuar.toLowerCase() === "si" && saldo > 0);
    console.log("Gracias por usar el cajero automático. Saldo final: " + saldo);
}
cajeroAutomatico();
