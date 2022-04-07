

const personal = ["Juan", "1970", "Nestle"]

let datos = prompt("Ingrese su nombre, su legajo o donde se encuentra");

const index = personal.indexOf(datos);

if ( index != -1  ) {
    alert("Ha ingresado correctamente");
}   else {
    alert("Los datos son incorrectos");
}





