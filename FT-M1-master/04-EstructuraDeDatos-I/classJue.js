// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

// var persona1 = new Persona("Jorge Vega", 22);
// var persona2 = new Persona("Juana Nieves", 55);

// console.log(persona1);

// console.log(persona2);

function Stack() {
  this.arr = [];
}

Stack.prototype.push = function (value) {
  this.arr.push(value);
};

var miStack1 = new Stack();
miStack1.push(5);

var miStack2 = new Stack();
miStack2.push(10);

var miStack3 = new Stack();

var miStack4 = new Stack();

console.log(miStack1);

console.log(miStack2);

console.log(miStack3);

console.log(miStack4);
