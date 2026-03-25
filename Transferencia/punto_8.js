/*Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
acierta, mostrar “Bienvenido”.*/

function vali_credenciales(usuario, contraseña){
    const usua_correcto = "Usuario123";
    const contra_correcto = "123Usuario";

    return usuario === usua_correcto && contraseña === contra_correcto;
}

function login(){
    let intentos = 3;

    while (intentos > 0){
        let usuario = prompt(" Ingresa usuario: ");
        let contraseña = prompt(" Ingrese contraseña: ");

        if (vali_credenciales(usuario, contraseña)) {
            console.log("Bienvenido");
            return;
        } else {
            intentos--;
            console.log(`Datos incorrectos. Te quedan ${intentos} intentos`);
        }
    }

    console.log("Acceso denegado");
}

login();