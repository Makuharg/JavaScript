localStorage.setItem("string", "hola");

let guardar = JSON.stringify(localStorage.getItem("string"));

console.log(typeof(guardar));

if (typeof(guardar) === typeof(localStorage.setItem("string", "hola"))) {
    console.log("esto es un string");
} else {
    console.log("esto no es un string");
}





// typeof(guardar) ? console.log("esto es un string") : console.log("esto no es un string");