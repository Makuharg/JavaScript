// Programa donde el usuario se registra, la idea a futuro es poder llevar un registro de cada empleado
// Por ejemplo: cuantas horas trabajo, que dias, si es feriado o no, si se tomo licencia, etc

function Persona (nombre, apellido, legajo) {
    this.nombre   = nombre;
    this.apellido = apellido;
    this.legajo   = legajo;
    this.hablar   = function () {alert(`Bienvenido  ${this.nombre} ha ingresado correctamente`)}
}


// nombre= prompt("Ingrese su nombre");
// apellido= prompt("Ingrese su apellido");
// legajo= prompt("Ingrese su legajo");

const persona1 = new Persona((nombre= prompt("Ingrese su nombre")), (apellido= prompt("Ingrese su apellido")), (legajo = prompt("Ingrese su legajo")));

persona1.hablar();
