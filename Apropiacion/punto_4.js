let saldo = 1000;

// Función para mostrar saldo
function mostrarSaldo() {
  console.log("Saldo actual: $" + saldo);
}

// Función para retirar dinero
function retirarDinero() {
  let retiro = parseFloat(prompt("Ingrese el monto a retirar:"));

  if (isNaN(retiro) || retiro <= 0) {
    console.log("Ingrese un valor válido");
    return true; // sigue el proceso
  }

  if (retiro > saldo) {
    console.log("Saldo insuficiente. Tu saldo es: $" + saldo);
    return false; // detener el ciclo
  }

  saldo -= retiro;
  console.log("Retiro exitoso de $" + retiro);
  mostrarSaldo();

  if (saldo <= 0) {
    console.log("Ya no tienes saldo disponible");
    return false;
  }

  return true;
}

// Programa principal
function cajeroAutomatico() {
  console.log("Bienvenido al cajero automático");
  mostrarSaldo();

  while (true) {
    let continuar = retirarDinero();

    if (!continuar) {
      break;
    }
  }

  console.log("Gracias por usar el cajero");
}

// Ejecutar programa
cajeroAutomatico();