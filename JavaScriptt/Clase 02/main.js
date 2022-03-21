/*
if (condicion) {
    instrucciones a ejecutar en caso que la condicion sea verdadera

}


*/

console.log("hola" === "hola");

// Asignacion de valor
let x = 5;
console.log(x);

// compara valor y variable
console.log("5" === 5); 

// compara valor
console.log("5" == 5);

// Condicion if, else y else if

/*
if(3 === 5) {
    console.log("hola esta muy bien");
    
} else {
    console.log("algo anda mal");
}

let edad = prompt("Ingresar tu edad");

if (edad >= 18) {
    alert("Podes ingresar, divertite.");
} else {
    alert("No podes ingresar.");
}
*/

// else if

/*
let edad = 20;

if(edad <= 10){
    console.log("No podes ingresar");
} else if(edad < 18) {
    console.log("podes entrar con un adulto");
} else {
    console.log("podes ingresar solo");
}
*/

/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if (( nombreIngresado != "") && ( apellidoIngresado != "")) {
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");  
}
*/

/*
let edad = prompt("Ingresar edad");
let sexo = prompt("Ingresar sexo");

if (  edad >= 18 && sexo == "mujer" ) {
    alert("Pasas gratis")
} else if ( edad >= 18 && sexo == "hombre") {
    alert("Tenes que pagar $200")
} else {
    alert("No podes ingresar")
}
*/

/*
for (let i=0; i<10 ; i++){
    console.log(i);
}

for (let i=10 ; i>0 ; i--){
    console.log(i);
}
*/

/*
let ingresarNumero = parseInt(prompt("Ingresar numero"));

for ( let i=0 ; i<=10 ; i++ ) {
    let resultado= ingresarNumero * i;
    alert(ingresarNumero + " X " + i + " = " + resultado);
}
*/
/*
for (let i=0 ; i<=10 ; i++) {
    if (i == 5) {
        break;
    }
    alert(i);
}
*/

/*
for (let i = 1 ; i<=10 ; i++) {
    if (i==5) {
        continue;
    }
    alert(i);
}
*/

/*

let contraseña = prompt("Ingrese la contraseña");

while (contraseña != "1234") {
    alert("El usuario ingreso una contraseña incorrecta");
    contraseña = prompt("Vuelve a ingresar la contraseña");
} alert("Bienvenido!")
*/

/*
do {
    var contrasena = prompt("Ingresar la contraseña");
} while (contrasena != "1234");
*/


let entrada = prompt("Ingresar un nombre");

while(entrada != "ESC"){
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIEN SOS?");
            break;
    }
    entrada = prompt("Ingresar un nombre");
}