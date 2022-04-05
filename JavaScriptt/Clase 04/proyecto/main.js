// Programa de array de personas donde se va a tomar lista, el que este presente no aparecera mas en la lista

const personas = ["Pedro", "Juan", "Marcos", "Rosana", "Damian", "Alfonso", "Sabrina"];

alert(personas);

let nombre = prompt("Ingrese el nombre de la persona presente");

let index = personas.indexOf(nombre);

if (index != -1) {
    personas.splice(index, 1);
    alert(nombre + " esta presente");
    }   else {
            alert("Esa persona no se encuentra en la lista");
    }

alert(personas);