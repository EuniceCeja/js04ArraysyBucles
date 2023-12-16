/*
==Arrays==
* Es una colección ó agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array. 
* Los arrays se utilizan para almacenar y organizar datos de manera más eficiente.
*/
// Crear un Array
const numeros = [1, 2, 3, 4, 5];
// Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];
console.log(comida);

// Array mixto
const mixto = [
    "Pluma",
    8,
    true,
    {nombre: "Eunice"}
]
console.log(mixto);
// Array vacío
const lista = [];
console.log(lista);
// Agregar elementos a mi array vacío
lista[0] = "Leche";
lista[1] = "Pollo";
lista[2] = "Huevo";
lista[3] = "Pan";
console.log(lista);

// Otra manera de crear arrays
const frutas = new Array("Manzanas", "Peras", "Uvas", "Naranjas");
console.log(frutas);

/*
Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array
*/

// Longitud de un array
console.log(frutas.length);
// Acceder a los elementos del Arrays, acorde a su índice
console.log(frutas[2]);
console.log(frutas[0]);

// Modificar un elemento del arrays por el índice
const cremeria = ["Jamón", "Salchicha", "Queso doble crema", "Queso cotija", "Yogurt"];
console.log(cremeria);
// Cambiamos un elemento a quesillo
cremeria[2] = "Quesillo";
cremeria[4] = "Danonino del grande";
console.log(cremeria);

// Arreglo de arreglos o multidimensional
console.log("Arreglo de arreglos");

// Estados : Estado de México, Guadalajara, Yucatán, Sonora, Oaxaca, CDMX.
// Platillos : Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda, Tacos.

const estados = ["Estado de México", "Jalisco", "Yucatán", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos"];
const menu = [estados, platillos];
console.log(`En ${menu[0][2]} se come ${menu[1][2]}`);
/*
En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
*/

/*
Métodos de Arrays
Método de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out)lo que significa el primer elemento eliminado.
* push
* shift
* unshift

*Método de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-in-first-out) que significa el último elemento añadido es el primero en ser eliminado.
el último elemento (L) que se agrega(I) es el primero(F) en ser eliminado(O)
* push
* pop
*/
console.log("Métodos de Arrays");
const ch35 = ["Dani", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//pop() Eliminar el último elemento del array
let popch35 = ch35.pop();
console.log(popch35); // devuelve el dato eliminado
console.log(ch35) // elimina el dato de la lista 

//push() Agregar el final del array
let pushch35 = ch35.push("Moni");
console.log(ch35);

//shift() quitar primero del array
let shiftch35 = ch35.shift();
console.log(ch35);

//unshift agregar al principio del array
let unshiftch35 = ch35.unshift("Dani");
console.log(ch35);

//reverse() cambia el sentido del ordenamiento del array 
let reversech35 = ch35.reverse();
console.log(ch35);

/*
Investigar:
*sort
*forEach
*slice
*splice
*indexOf
*/

