// Función principal del juego
function adivinarNumero() {
  let numeroSecreto = Math.floor(Math.random() * 20) + 1;
  let intento = 0;
  let numeroUsuario;

  console.log("🎯 Adivina el número (entre 1 y 20)\n");

  while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt("Ingresa un número:"));
    intento++;

    if (isNaN(numeroUsuario)) {
      console.log("❌ Ingresa un número válido");
      continue;
    }

    if (numeroUsuario === numeroSecreto) {
      console.log("🎉 ¡Correcto! Adivinaste el número en " + intento + " intentos");
    } else if (numeroUsuario < numeroSecreto) {
      console.log("🔼 El número es mayor");
    } else {
      console.log("🔽 El número es menor");
    }
  }

  console.log("🏁 Fin del juego");
}

// Ejecutar juego
adivinarNumero();