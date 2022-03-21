// Programa que multiplica el numero ingresado por el usuario, a excepcion del 1 y del 0.


let numero = prompt("¿Cual tabla de multiplicar quiere saber?");

if (numero == 0 || numero == 1) {
        alert("Cualquier numero multiplicado por cero, a excepcion del uno, es CERO. Y cualquier numero multiplicado por uno te da el mismo valor numerico")
}   else {
        for (i=0 ; i<11 ; i++) {
    alert(numero + "X" + i + "=" + numero*i);
        }
    alert("Felicidades! Ahora sabes la tabla del " + numero)
 }

