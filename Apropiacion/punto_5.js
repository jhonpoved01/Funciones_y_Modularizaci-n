let resultado = document.getElementById("resultado");

// Crear lista de corredores
let corredores = [];

for (let i = 1; i <= 8; i++) {
  corredores.push({
    nombre: "Corredor " + i,
    vueltas: 0,
    cansado: false
  });
}

// Simulación
for (let i = 0; i < corredores.length; i++) {
  let corredor = corredores[i];

  while (corredor.vueltas < 4 && !corredor.cansado) {

    // Probabilidad de cansarse (30%)
    if (Math.random() < 0.3) {
      corredor.cansado = true;
      resultado.innerHTML += corredor.nombre + " se cansó en la vuelta " + corredor.vueltas + "<br>";
      break;
    }

    corredor.vueltas++;
    resultado.innerHTML += corredor.nombre + " completó vuelta " + corredor.vueltas + "<br>";
  }

  if (!corredor.cansado && corredor.vueltas === 4) {
    resultado.innerHTML += corredor.nombre + " terminó la carrera 🎉<br>";
  }

  resultado.innerHTML += "<hr>";
}