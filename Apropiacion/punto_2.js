for (let i=1; i<=5; i++) {
let estudiante = prompt("Ingrese el nombre del estudiantes: " + i);
let carnet= prompt("el estudiante trae su carnet?:")
if (carnet == "no") {
    console.log(estudiante + "no puede ingresar al salon");
    continue;
 } else {
    console.log(estudiante + "puede ingresar al salon");
    }
}    