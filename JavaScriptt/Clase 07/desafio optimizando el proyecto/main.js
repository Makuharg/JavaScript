localStorage.setItem("string", "hola");

let guardar = JSON.stringify(localStorage.getItem("string"));

console.log(guardar);
console.log(typeof(guardar));


typeof(guardar) === `string` ? console.log("esto es un string") : console.log("esto no es un string");