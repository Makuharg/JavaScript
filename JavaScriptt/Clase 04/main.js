// array  =arreglos

{
//  array vacio
const ar1 = [];

// array mixto
const arr2 = [1, true, "hola"];
}
// acceder a posiciones del array
{
const numeros = [1,2,3,4,5];
console.log(numeros[0]);
console.log(numeros[3]);

let resultado = numeros[1] + numeros[2];
console.log(resultado);
}

// recorrido del array

{
const numeros = [1,2,3,4,5];
for (let index = 0 ; index<5 ; index++) {
    console.log(numeros[index]);
}
}

// Metodos y propiedades
// LENGTH (Longitud del arreglo)
{
console.log("andres".length); // length cuenta la cantidad de elementos

const numeros = [1,2,3,4,5];
console.log(numeros.length);

{
const numeros = [1,2,3,4,5];
for (let i = 0 ; i.length ; i++) {
    console.log(numeros[i]);
}
}
}

// agregar elementos al fina del array
{
const numeros = ["marca", 3, "palabra"];
numeros.push("otro elemento");

console.log(numeros.length);
console.log(numeros);
}

// agregar al principio del array
{
const numeros = ["marca", 3, "palabra"];
numeros.unshift("otro elemento");

console.log(numeros.length);
console.log(numeros);
}

// quitar elementos
// eliminar el primer elemento del array
{
const numeros = ["marca", 3, "palabra"];
numeros.shift();
console.log(numeros);
}
// eliminar el ultimo elemento del array
{
const numeros = ["marca", 3, "palabra"];
numeros.pop()
console.log(numeros);
}

// eliminar uno o varios elementos de un array
// tiene dos parametros
{
const nombres = ["rita", "pedro", "miguel", "ana", "juan"];
// 0 es la posicion y 2 es la cantidad de elementos que queres borrar
nombres.splice(0 , 2);
console.log(nombres);
}

// el metodo join genera un string con todos los elementos del array

const nombres = ["rita", "pedro", "miguel", "ana", "juan"];

console.log(nombres.join(", "));

console.log(nombres.join("*"));

// el metodo concat combina 2 arrays en uno nuevo
{
const perros = ["pupy", "ronmnie"]
const gatos = ["michi", "garfield"]

const mascotas = perros.concat(gatos);
console.log(mascotas);
}

// el metodo slice devuelve una copia de una parte del array dentro de un nuevo array

{
const nombres = ["rita", "pedro", "miguel", "ana", "juan"];
const masculinos = nombres.slice(1,4);
console.log(masculinos);
}

// el metodo indexOf() nos permite obtener el indice de un elemento en un array
// si el elemento no existe da como valor -1

{
const nombres = ["rita", "pedro", "miguel", "ana", "juan"];
console.log(nombres.indexOf("rita"));
console.log(nombres.indexOf("caca"));
}
{
// ejercicio del profe
// const nombres = ["rita", "pedro", "miguel", "ana", "juan"];
// let nombre = prompt("Ingresa el nombre de la persona que se retira")


// nombres.splice(nombres.indexOf(nombre), 1);

// alert(nombres);
}

// includes es para saber si un elemento existe dentro de un elemento
{
const nombres = ["rita", "pedro", "miguel", "ana", "juan"];

}

// reverse invierte el origen de los elementos
{
const nombres = ["rita", "pedro", "miguel", "ana", "juan"];
nombres.reverse();
console.log(nombres);
}

// cargar array con entradas

{
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

}

// eliminar elementos de un array
{
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// // recibo el elemento a borrar por parámetro
// const eliminar = (nombre) => {
//     // busco su índice en el array
//     let index = nombres.indexOf(nombre)

//      // si existe, o sea es distinto a -1, lo borro con splice
//     if (index != -1 ) {
//         nombres.splice(index, 1)
//     } 
// }
}

// array de objetos
{
{
const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" });
}

{
const productos = [
    { id: 1, producto: "Arroz" },
    { id: 2, producto: "Fideo" },
    { id: 3, producto: "Pan" }
];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
}


// for...of



/*1. Escriba una funcion que permita administrar el inventario de una tienda virtual 
    Su sistema debe permitir lo siguiente: 
    1. Escoger una opcion entre: 
        A. Crear un producto
        B. Listar todos los productos de la tienda
        C. Borrar un producto, dado su id
        D. Modificar un producto, dado su id
        E. FIN
        Los productos deben tener la siguiente estructura: 
        id
        nombre
        precio
        Si el usuario ingresa FIN, debe terminar el proceso
        SI el usuario ingresa una opción inválida debe mostrar un mensaje indicando el error y mostrar el menú de nuevo
*/