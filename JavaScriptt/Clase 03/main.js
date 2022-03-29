// function nombreFuncion() {
//     codigo a ejecutar por la funcion
// }

// function saludo() {
//     console.log("hola a todos!");
// }

// saludo();

// ========================


// function transporte(precio, nombre) {
//     console.log(`su hijo ${nombre} ha sido transportado seguramente con un pago de ${precio} pesos`);
    
    
// }
// transporte(100, "Juan");
// transporte(300, "Camilo");

// ===============================

// let total = 0;

// function transporte(precio,nombre, distancia){

//     total = precio * distancia;

//     console.log(`Hola ${nombre} tu viaje es de ${total}`);
// }

// transporte(10, "Ezequiel", 1000);

// ===============================

// function sumar(numero1, numero2) {
//     resultado = numero1 + numero2;
//     console.log(resultado);
// }

// sumar(1,2)

// function sumar(numero1, numero2) {
//     console.log(numero1 + numero2);
// }

// sumar(1,2)

// =====================
//  EJEMPLO 1

// function sumar(numero1 , numero2) {
//     return numero1 + numero2;
// }

// let resultado = sumar(5,8);

// console.log(resultado);

//  EJEMPLO 2

// function sumar(numero1 , numero2) {
//     console.log(numero1 + numero2);
//     return numero1 + numero2;
// }
    
// let resultado = sumar(5,8);
// console.log("Este es el resultado:",resultado);
 
// ================================

function calculadora(numero1, numero2, operacion) {
    switch(operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        default:
            return 0;
            break;

    }
}
console.log(calculadora(10,5,"*"));
console.log(calculadora(3,1,"/"));

// Scope de funcion local en funcion = VAR
// Scope de funcion local en bloque = LET Y CONST

// ======================

// FUNCIONES ANONIMAS
{
const suma = function (a,b) {return a + b}
const resta = function (a,b) {return a - b}

console.log(suma(15,20));
console.log(resta(15,20));
}
// =======================

// FUNCIONES FLECHA
{
const suma = (a,b) => {return a + b}
const resta = (a,b) => a - b ;

console.log(suma(15,20));
console.log(resta(15,20));
}

const suma = (a,b) => a + b ;
const resta = (a,b) => a - b ;
const iva = x => x * 0.21 ;

let precioProducto = 600;
let descuento = 50

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

console.log(nuevoPrecio)

// ================
//  OBJETOS
{
const persona1 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
}

// persona1.nombre = "Damian"
// persona1.edad = 30

console.log(persona1.nombre);

console.log(persona1.edad);

console.log(persona1.calle);
}

// =========
// FUNDADOR DE OBJETOS
{
function Persona(nombre,edad,calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona("Homero", 39 , "Santamarina 1234");
const persona2 = new Persona("marge", 43 , "Santamarina 1234");

console.log(persona1);
console.log(persona1.nombre);
}

{
    function Persona(literal) {
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.calle = literal.calle;
    }
    
    const persona1 = new Persona("Homero", 39 , "Santamarina 1234");
    const persona2 = new Persona("marge", 43 , "Santamarina 1234");
    
    console.log(persona1);
    console.log(persona1.nombre);
}
    
