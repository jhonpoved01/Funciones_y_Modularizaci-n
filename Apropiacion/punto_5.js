// Función que simula a un corredor
function correr(nombre) {
  console.log("🏃 " + nombre + " comienza la carrera");

  for (let vuelta = 1; vuelta <= 4; vuelta++) {

    // Simular si el corredor se cansa (número aleatorio)
    let cansado = Math.random() < 0.3; // 30% probabilidad de cansarse

    if (cansado) {
      console.log("❌ " + nombre + " se cansó en la vuelta " + vuelta);
      return; // se detiene este corredor
    }

    console.log("✅ " + nombre + " completó la vuelta " + vuelta);
  }

  console.log("🏁 " + nombre + " terminó la carrera");
}

// Función principal
function competencia() {
  let corredores = [
    "Corredor 1",
    "Corredor 2",
    "Corredor 3",
    "Corredor 4",
    "Corredor 5",
    "Corredor 6",
    "Corredor 7",
    "Corredor 8"
  ];

  console.log("🏟️ Inicia la competencia de atletismo\n");

  for (let i = 0; i < corredores.length; i++) {
    correr(corredores[i]);
    console.log("-------------------------");
  }

  console.log("🏆 Fin de la competencia");
}

// Ejecutar
competencia();