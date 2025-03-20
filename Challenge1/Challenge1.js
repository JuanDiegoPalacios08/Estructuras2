// Ejemplo de array para las demostraciones
const originalArray = [10, 20, 30, 20, 50, 60];

// Mostramos el array inicial
console.log("Array original:", originalArray);

// 1) .at(index)
// Devuelve el elemento en la posición indicada (permite índices negativos).
console.log("\n1) at(2):", originalArray.at(2));        // 30
console.log("   at(-1):", originalArray.at(-1));       // 60 (último elemento)

// 2) .concat(array)
// Concatena uno o más arrays y devuelve un nuevo array.
const concatResult = originalArray.concat([70, 80]);
console.log("\n2) concat([70,80]):", concatResult);

// 3) .copyWithin()
// Copia una parte del array dentro del mismo array, sin cambiar su longitud.
const copyArray = [...originalArray]; // clonamos para no mutar el original
copyArray.copyWithin(1, 3, 5); // desde índice 3 hasta 5 (sin incluir 5) se copia al índice 1
console.log("\n3) copyWithin(1,3,5):", copyArray);

// 4) .entries()
// Devuelve un iterador con pares [índice, valor].
console.log("\n4) entries():");
for (const [index, value] of originalArray.entries()) {
  console.log(`   índice: ${index}, valor: ${value}`);
}

// 5) .every(callback)
// Devuelve true si TODOS los elementos cumplen la condición.
const allGreaterThan5 = originalArray.every(num => num > 5);
console.log("\n5) every(num => num > 5):", allGreaterThan5);

// 6) .fill(value, start, end)
// Rellena todos los elementos desde start hasta end con un valor estático.
const fillArray = [1, 2, 3, 4, 5];
fillArray.fill(9, 1, 4); // rellena con 9 desde índice 1 (incluido) hasta 4 (excluido)
console.log("\n6) fill(9,1,4):", fillArray);

// 7) .filter(callback)
// Crea un nuevo array con los elementos que cumplan la condición.
const filtered = originalArray.filter(num => num > 20);
console.log("\n7) filter(num => num > 20):", filtered);

// 8) .find(callback)
// Devuelve el PRIMER elemento que cumpla la condición (o undefined si no existe).
const foundItem = originalArray.find(num => num === 20);
console.log("\n8) find(num => num === 20):", foundItem);

// 9) .findIndex(callback)
// Devuelve el índice del PRIMER elemento que cumpla la condición (o -1 si no existe).
const foundIndex = originalArray.findIndex(num => num === 50);
console.log("\n9) findIndex(num => num === 50):", foundIndex);

// 10) .findLast(callback) (ES2023)
// Devuelve el ÚLTIMO elemento que cumpla la condición.
if (typeof originalArray.findLast === "function") {
  const foundLast = originalArray.findLast(num => num === 20);
  console.log("\n10) findLast(num => num === 20):", foundLast);
} else {
  console.log("\n10) findLast() no soportado en este entorno.");
}

// 12) .findLastIndex(callback) (ES2023)
// Devuelve el índice del ÚLTIMO elemento que cumpla la condición.
if (typeof originalArray.findLastIndex === "function") {
  const foundLastIndex = originalArray.findLastIndex(num => num === 20);
  console.log("    findLastIndex(num => num === 20):", foundLastIndex);
} else {
  console.log("    findLastIndex() no soportado en este entorno.");
}

// 13) .flat(depth)
// Crea un nuevo array con todos los sub-arrays concatenados recursivamente.
const nestedArray = [1, [2, [3, [4]]]];
console.log("\n13) flat(2):", nestedArray.flat(2));

// 14) .flatMap(callback)
// Primero mapea cada elemento usando la función callback y luego aplana el resultado.
const flatMapResult = [1, 2, 3].flatMap(num => [num, num * 2]);
console.log("\n14) flatMap(num => [num, num*2]):", flatMapResult);

// 15) .forEach(callback)
// Ejecuta una función por cada elemento (no devuelve nada).
console.log("\n15) forEach():");
originalArray.forEach((num, idx) => {
  console.log(`   Índice ${idx}, valor ${num}`);
});

// 16) .includes(valor, fromIndex)
// Devuelve true si el array contiene el valor especificado.
console.log("\n16) includes(50):", originalArray.includes(50));
console.log("    includes(999):", originalArray.includes(999));

// 17) .indexOf(valor, fromIndex)
// Devuelve el primer índice en el que se encuentra un elemento dado, o -1 si no está.
console.log("\n17) indexOf(20):", originalArray.indexOf(20));

// 18) .join(separador)
// Une todos los elementos del array en una cadena, separados por el separador.
console.log("\n18) join('-'):", originalArray.join("-"));

// 19) .keys()
// Devuelve un nuevo iterador que contiene las claves (índices) de cada elemento del array.
console.log("\n19) keys():", [...originalArray.keys()]);

// 20) .lastIndexOf(valor, fromIndex)
// Devuelve el último índice en el que se puede encontrar un elemento (o -1 si no está).
console.log("\n20) lastIndexOf(20):", originalArray.lastIndexOf(20));

// 21) .map(callback)
// Crea un nuevo array con los resultados de la función aplicada a cada elemento.
const mapped = originalArray.map(num => num * 2);
console.log("\n21) map(num => num * 2):", mapped);

// 22) .pop()
// Elimina el último elemento del array y lo devuelve (muta el array).
const popArray = [...originalArray];
const poppedValue = popArray.pop();
console.log("\n22) pop(): valor extraído:", poppedValue, "->", popArray);

// 23) .push(...elementos)
// Agrega uno o más elementos al final del array y devuelve la nueva longitud (muta el array).
const pushArray = [...originalArray];
const newLength = pushArray.push(70, 80);
console.log("\n23) push(70, 80):", pushArray, "-> nueva longitud:", newLength);

// 24) .reduce(callback, valorInicial)
// Aplica una función a un acumulador y cada valor del array (de izq. a der.) para reducirlo a un valor único.
const sum = originalArray.reduce((acc, num) => acc + num, 0);
console.log("\n24) reduce((acc, num) => acc + num, 0):", sum);

// 25) .reduceRight(callback, valorInicial)
// Similar a reduce, pero de der. a izq.
const sumRight = originalArray.reduceRight((acc, num) => acc + num, 0);
console.log("\n25) reduceRight((acc, num) => acc + num, 0):", sumRight);

// 26) .reverse()
// Invierte el orden de los elementos en el array (muta el array).
const reverseArray = [...originalArray];
reverseArray.reverse();
console.log("\n26) reverse():", reverseArray);

// 27) .shift()
// Elimina el primer elemento del array y lo devuelve (muta el array).
const shiftArray = [...originalArray];
const shiftedValue = shiftArray.shift();
console.log("\n27) shift(): valor extraído:", shiftedValue, "->", shiftArray);

// 28) .slice(inicio, fin)
// Devuelve una parte del array en un nuevo array (no muta).
const sliced = originalArray.slice(1, 4);
console.log("\n28) slice(1,4):", sliced);

// 29) .some(callback)
// Devuelve true si AL MENOS un elemento cumple la condición.
const someGreaterThan50 = originalArray.some(num => num > 50);
console.log("\n29) some(num => num > 50):", someGreaterThan50);

// 30) .sort([funcionComparacion])
// Ordena los elementos del array (muta el array).
const sortArray = [...originalArray];
sortArray.sort((a, b) => b - a); // orden descendente
console.log("\n30) sort((a,b) => b-a):", sortArray);

// 31) .splice(inicio, cuantos, ...elementos)
// Cambia el contenido de un array eliminando o reemplazando elementos existentes (muta el array).
const spliceArray = [...originalArray];
spliceArray.splice(2, 2, 99, 100); // elimina 2 desde índice 2 y agrega 99 y 100
console.log("\n31) splice(2,2,99,100):", spliceArray);

// 32) .toLocaleString()
// Devuelve una cadena localmente adecuada que representa los elementos del array.
console.log("\n32) toLocaleString():", originalArray.toLocaleString());

// 33) .toString()
// Convierte el array en una cadena de texto, separados por comas.
console.log("\n33) toString():", originalArray.toString());

// 34) .unshift(...elementos)
// Agrega uno o más elementos al inicio del array y devuelve la nueva longitud (muta el array).
const unshiftArray = [...originalArray];
const unshiftLength = unshiftArray.unshift(1, 2);
console.log("\n34) unshift(1, 2):", unshiftArray, "-> nueva longitud:", unshiftLength);

// 35) .values()
// Devuelve un nuevo iterador que contiene los valores de cada índice del array.
console.log("\n35) values():");
for (const value of originalArray.values()) {
  console.log("   valor:", value);
}

console.log("\n¡Demostración completada!");
