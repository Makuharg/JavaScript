

// llenando formulario

let formulario = document.getElementById("form");

formulario.addEventListener("submit", cargarForm);

function cargarForm(e) {

    e.preventDefault();
    let formulario = e.target;


    localStorage.setItem('nombre', JSON.stringify(formulario.children[0].value));
    localStorage.setItem('legajo', JSON.stringify(formulario.children[1].value));
    localStorage.setItem('planta', JSON.stringify(formulario.children[2].value));
     
}




