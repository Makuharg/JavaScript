
// llenando formulario

let formulario = document.getElementById("form");

formulario.addEventListener("submit", cargarForm);

function cargarForm(e) {
    e.preventDefault();
    let formulario = e.target;
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value); 
    console.log(formulario.children[2].value); 
}


