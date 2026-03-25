/*crea un codigo que lea el nombre y la edad de 5 personas. Solo mostrará en pantalla aquellas 
personas que tengan 18 años o más.*/

function pedir_datos(numero) {
    let nombre = prompt(`Ingrese el nombre de la persona ${numero}:`);
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

    return { nombre, edad };
}

function mostrar_mayores(persona) {
    if (persona.edad >= 18) {
        console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
    }
}


for (let i = 1; i <= 5; i++) {
    let persona = pedir_datos(i);
    mostrar_mayores(persona);
}