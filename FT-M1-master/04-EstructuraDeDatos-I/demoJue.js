// // function contarNumeros(num) {
// //   console.log(num);

// //   if (num === 0) {
// //     return "Terminó";
// //   }

// //   contarNumeros(num - 1);
// // }

// // contarNumeros(10);

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }

//   return num * factorial(num - 1);
//   //      5  *        4!
// }

// // * 4! => 4 * 3!

// // * 3! => 3 * 2!

// // * 2! => 2 * 1!

// // * 1! => 1

// var miSet = new Set();

// miSet.add(5);
// miSet.add(7);
// miSet.add(7);
// miSet.add(10);

// console.log(miSet);

// ! STACK => va a ser una clase

// ! miStack => INSTANCIA de la clase Stack

// ! objetos => PROPIEDADES Y MÉTODOS

// ! MÉTODOS => QUÉ PUEDE HACER ESTE OBJETO!!!!!!

// ! stack puede hacer dos cosas: agregar un elemento - sacar un elemento
// ! agregar(ELEM) y sacar van a ser métodos => los métodos son FUNCIONES!!!

// ! para representar la pila vamos a usar un ARRAY

function Stack() {
  this.arr = []; // ! PROPIEDAD
}

Stack.prototype.push = function (value) {
  this.arr.push(value);
};

Stack.prototype.pop = function () {
  this.arr.pop();
};

var miStack = new Stack();
var miOtroStack = new Stack();

miStack.push(50);
miStack.push(7);
miStack.push(7);
miStack.push(22);
miStack.push([1, 2, 3]);

console.log(miStack);

console.log(miOtroStack);

miStack.push({});

miStack.pop();

console.log(miStack);

var miArrayNormal = [1, 2, 3];
miArrayNormal.push(5);
miArrayNormal.pop();
miArrayNormal.shift();
miArrayNormal.unshift(456);

var miNuevoStack = new Stack();
miNuevoStack.push(5);
miNuevoStack.pop();
