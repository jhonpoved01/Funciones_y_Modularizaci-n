// Función para calcular descuento
function aplicarDescuento(total) {
  if (total > 100000) {
    let descuento = total * 0.10;
    return total - descuento;
  }
  return total;
}

// Función principal
function tienda() {
  let totalCompra = 0;
  let continuar = true;

  console.log("🛒 Bienvenido a la tienda\n");

  while (continuar) {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (isNaN(precio) || precio <= 0) {
      console.log("❌ Precio inválido");
      continue;
    }

    totalCompra += precio;
    console.log("Producto agregado. Total parcial: $" + totalCompra);

    let opcion = prompt("¿Desea comprar otro producto? (si/no)");

    if (opcion.toLowerCase() !== "si") {
      continuar = false;
    }
  }

  console.log("\n💰 Total sin descuento: $" + totalCompra);

  let totalFinal = aplicarDescuento(totalCompra);

  if (totalCompra > 100000) {
    console.log("🎉 Se aplicó un descuento del 10%");
  }

  console.log("💵 Total a pagar: $" + totalFinal);
  console.log("Gracias por su compra");
}

// Ejecutar programa
tienda();