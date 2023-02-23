6 / "3" // 2 convirtio un string a numero
"2" * "3" // 6 convirtio ambos a numero
4 + 5 + "px" // 9px resuelve de iz a derecha. "" string vacio se toma como cero. primero suma y despues concatena
"$" + 4 + 5 // $45 concatena todo 
"4" - 2 // 2 
"4px" - 2 // NAN si tuviera un + lo concatena por eso es NAN no es un numero
7 / 0 // infinity 
{}[0] // [0] undefined
parseInt("09") // 9
5 && 2 // 2 El operador lógico && devolverá el último valor si todos los demás valores son verdaderos; de lo contrario, devolverá el primer valor no verdadero.
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // [33] -[10] = [23]
3>2>1 //3>2 esto es true entonces true > 1 true es 1 1>1 false 
//[] == ![] * true 