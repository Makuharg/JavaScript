// creando un titulo de bienvenida

let titulo = document.createElement("h1");

titulo.innerHTML = "<h1> Bienvenido al registro de usuario </h1>"

document.body.append(titulo);

// agregando inputs de nombre y contraseña de usuario

let nombre = document.createElement("input1");

nombre.innerHTML = "<input id=nombre type=text placeholder=Nombre>"

document.body.append(nombre);

let contraseña = document.createElement("input2");

contraseña.innerHTML = "<input id=contraseña type=text placeholder=Contraseña>"

document.body.append(contraseña);

// agregando un boton

let buton = document.createElement("boton");

buton.innerHTML = "<button id=boton>Ingresar</button>"

document.body.append(buton);


