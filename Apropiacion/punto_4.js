let saldo = 1000;

// Supongamos que estos elementos ya existen en el HTML
const saldoTexto = document.getElementById("saldo");
const mensaje = document.getElementById("mensaje");
const input = document.getElementById("retiro");
const boton = document.getElementById("btnRetirar");

// Mostrar saldo inicial
saldoTexto.textContent = saldo;

boton.addEventListener("click", function () {
  let cantidad = parseInt(input.value);

  if (cantidad <= 0 || isNaN(cantidad)) {
    mensaje.textContent = "Ingrese un valor válido";
    return;
  }

  if (saldo >= cantidad) {
    saldo -= cantidad;
    mensaje.textContent = "Retiro exitoso";
  } else {
    mensaje.textContent = "Saldo insuficiente. Operación finalizada.";
    boton.disabled = true; // se detiene el proceso
  }

  saldoTexto.textContent = saldo;

  // Si ya no hay saldo suficiente, bloquear retiros
  if (saldo <= 0) {
    boton.disabled = true;
  }
});