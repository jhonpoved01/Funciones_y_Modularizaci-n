// Función para simular un comprador
function venderBoleto(numeroCliente) {
  console.log("🎟️ Atendiendo cliente #" + numeroCliente);

  // Simular edad (entre 10 y 60 años)
  let edad = Math.floor(Math.random() * 51) + 10;

  // Simular tipo de película
  let peliculaAdultos = Math.random() < 0.5; // 50% probabilidad

  console.log("Edad del cliente: " + edad);
  console.log("Película: " + (peliculaAdultos ? "Solo para adultos" : "Para todo público"));

  // Validación
  if (edad < 18 && peliculaAdultos) {
    console.log("❌ Venta rechazada (menor de edad para película de adultos)");
    return; // pasa al siguiente cliente
  }

  console.log("✅ Venta realizada con éxito");
}

// Función principal
function cine() {
  console.log("🎬 Inicio de venta de boletos\n");

  for (let i = 1; i <= 15; i++) {
    venderBoleto(i);
    console.log("----------------------");
  }

  console.log("🍿 Fin de la venta de boletos");
}

// Ejecutar programa
cine();