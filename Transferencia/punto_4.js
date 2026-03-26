// Función para calcular el promedio
function calcularPromedio(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Función para evaluar si aprueba o reprueba
function evaluarEstudiante(promedio) {
  if (promedio >= 3.0) {
    return "✅ Aprueba";
  } else {
    return "❌ Reprueba";
  }
}

// Función principal
function notasEstudiantes() {
  console.log("📚 Registro de notas de 5 estudiantes\n");

  for (let i = 1; i <= 5; i++) {
    console.log("👨‍🎓 Estudiante #" + i);

    let nota1 = parseFloat(prompt("Ingrese nota 1:"));
    let nota2 = parseFloat(prompt("Ingrese nota 2:"));
    let nota3 = parseFloat(prompt("Ingrese nota 3:"));

    // Calcular promedio
    let promedio = calcularPromedio(nota1, nota2, nota3);

    // Evaluar resultado
    let resultado = evaluarEstudiante(promedio);

    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Resultado: " + resultado);
    console.log("--------------------------");
  }

  console.log("📌 Fin del registro");
}

// Ejecutar programa
notasEstudiantes();