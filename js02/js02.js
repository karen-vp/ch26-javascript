console.log('Sesion JS02');

// ----------Función declarada-----------
// function declaration, function statement
// Una característica es que las funciones declaradas tiene hoisting.

// El hoisting es un comportamiento que ocurre durante la compilación del código en el cual las funciones son movidas hacia la parte superior del ámbito actual antes de que se ejecute el código. 
console.log('El resultado de 5*10 es = ' + multiplica(5, 10));
console.log(multiplica(5, 10));
console.log(multiplica(8, 8));
console.log(multiplica(-4, 2));

function multiplica(a, b) {
    return a * b;
}
function divide(dividendo, divisor) {
    return dividendo / divisor;
}
console.log(divide(5, 2)) // 2.5
console.log(divide(5, '2')); // 2.5
console.log(divide('5', '2')); // 2.5
console.log(divide('5 0', '2')) // NaN


//  ---------------Funciones expresadas---------------
// Function expressions
// Son declaradas dentro de la asignación de una variable.
// Estas funciones pueden ser anonimas (no tienen nombre).
// Las funciones expresadas no tiene hoisting, porque no se carga en memoria hasta que se utilice.
// Estas funciones no tienen Hoisting.

/* Sintaxis
    const nombreVariable = function nombreFuncion(parametros){
        instrucciones;
    }
*/

//Cuando se crean las funciones así se accede a ella desde el nombre de la variable o constante que se le este asignando (i.e: sum), por eso no es necesario ponerle un nombre a la función.
const sum = function sumatoria(a, b) {
    return a + b;
};

const resta = function (a, b) {
    return a - b;
};

const potencia = function (a, b) {
    return a ** b;
};

console.log(sum(5, 10));
console.log(resta(5, 10));
console.log(potencia(5, 10));


// --------------------Funciones autoinvocadas--------------------
// self-invoking functions
// Se auto invocan, se pueden definir con funciones anonimas (sin nombre)

/*Sintaxis
    (function(){
        instrucciones;
    })()
*/

(function () {
    console.log('Me auto invoco en la función anonima');
})();

// ----------- Funciones Flecha ---------------------
// Arrow Functions
// Son funciones similares a las funciones expresadas pero:
// No requieren la palabra function
// Si tiene una sola instrucción no requiere las {}

// Nota: si solo se retorna una instrucción se puede obviar el return.

const areaRectangulo = (base, altura) => base * altura;

console.log('Area de rectangulo: ', areaRectangulo(5, 3));

// ------------------ Documentar funciones --------------
/**
 * Este método sirve para calcular el area de un triangulo
 * @param {number} base esto es la descripción de base
 * @param {number} altura esto es la descripcion de altura
 * @returns área del Triangulo.
*/

// ----------------- Parámetros default ---------------
const areaTriangulo = (base = 1, altura = 1) => (base * altura) / 2;

console.log('Area de triángulo b:5 a:10 =', areaTriangulo(5, 10));
console.log('Area de triángulo b:8 =', areaTriangulo(8));

// -------------------- Parametros rest ----------------------------
// Rest parameters
// Sintaxis: ...nombreParametro (y este debe ir al final de los parametros)
// Nos permite representar una serie de valores indefinidos en los argumentos
// Estos se representan como un array.

function sumatoriaDeVariosNumeros(a, b, ...params) {
    let suma;
    suma = a + b;
    params.forEach(element => suma += element);
    return suma;
}

console.log("Sumatoria de varios numeros: ", sumatoriaDeVariosNumeros(5, 6));
console.log("Sumatoria de varios numeros: ", sumatoriaDeVariosNumeros(5, 6, 9, 10));
console.log("Sumatoria de varios numeros: ", sumatoriaDeVariosNumeros(5, 6, 9, 10, 20, 50));

// -------------- Funciones Callback ---------------------
// Función que se pasa a otra funcion como argumento, para luego invocarse para completar algún tipo de rutina o acción.

// Ejercicio 3 funciones, una que imprima en consola, alert, DOM h1
// 1 parametro de entrada
// no tiene return

const printToConsole = (message) => {
    console.log(message);
}

const printToAlert = (message) => {
    alert(message);
}

const printToTitle = (description) => {
    const titulo = document.querySelector('div');
    titulo.innerHTML = `<h2>${description}</h2>`;
}

function getNameAndPrint(printFunction) {
    const name = prompt('Dime tu nombre');
    const text = `Hola ${name}, espero tengas un gran día`
    printFunction(text);
}

// getNameAndPrint(printToConsole);
// getNameAndPrint(printToTitle);
// getNameAndPrint(printToAlert);

// ----------------------------------------------------------

/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/
// Funcion normal que duplica los elementos de un array
function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        const duplicate = arr[i] * 2;
        doubleNumbers.push(duplicate);
    }
    return doubleNumbers;
}

// Función que nos sirve de callback para llamarla en otra función
// const duplicate = (number) => number * 2;

/*  Funcion que usa un callback con una funcion anonima declarada
    Aquí map recibe una funcion declarada como callback, y podemos definir esa función en los argumentos o hacer referencia a ella, pero sin los parentesis solo el nombre de la funcion
    Además de que los argumentos que recibe nuestra funcion de callback debe seguir el mismo orden que los argumentos del método de map, para que funcione.
 */

function doubleWithMap(array) {
    const duplicateNumber = array.map(function (number) {
        return number * 2;
    });
    return duplicateNumber;
}
/* Funcion declarada que usa un arrow function como callback
 Esta es otra forma de hacer callback con arrow function, es lo mismo de arriba pero reduciendo el codigo.
 */
function doubleWithMapArrow(array) {
    return array.map((number) => number * 2);
}

const numbers = [5, 10, 15, 20, 25];
// console.log(double(numbers));
console.log(doubleWithMap(numbers));

// Esta es una versión aun mas reducida de duplicar los elementos de un array
console.log(numbers.map(number => number * 2));


/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
*/



// Funcion declarada que nos devuelve unicamente los valores que coincidan en ambos arreglos.
function commonCourses(arr1, arr2){
    const courses = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j])
                courses.push( arr2[j]);
        }
    }
    return `Cursos en comun: ${courses}`
}
// Arreglos de cursos de estudiantes
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const studen3courses = ['Music'];

// Funcion declarada que nos devuelve unicamente los valores que coincidan en ambos arreglos usando métodos:  filter e includes
function commonCoursesWithFilter(arr1, arr2){
    return arr1.filter(element => arr2.includes(element));
}

// console.log(commonCourses(student1Courses, student2Courses));
//Aquí usamos el método Join para colocarle un espacio a nuestros cursos en comun despues de la (', ')
console.log(`Cursos en comun ${commonCoursesWithFilter(student1Courses, student2Courses).join(', ')}`);

// En este caso estamos comparando los dos arreglos anteriores (student1Courses, student2Courses) con un tercer arreglo de cursos (studen3courses)
const commonCoursesWithStudent3 = commonCoursesWithFilter(commonCoursesWithFilter(student1Courses, student2Courses), studen3courses);
console.log('Cursos en comun: '+ commonCoursesWithStudent3.join(', '));

// ---------- Contar la cantidad de caracteres de una frase ---------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function

// Frase a evaluar
const phrase = 'pepe pecas pica papas con un pico y una pala';

// mi version de esta funcion
const countLetter = (phrase)=>{
    let count = 0;
    const letter = 'p';
    for(i = 0; i < phrase.length; i++){
        if(phrase[i] == letter ) count += 1;
        }
        return count;
}
console.log(`Hay: ${countLetter(phrase)} 'p' en la frase: ${phrase}`);

// Funcion contar cantidad de caracteres iguales que existen en una frase de forma reducida y usando los métodos: 
// toLowerCase: que nos permite convertir mi frase a minisculas
// split: divide un string en un array de strings mediante la separación de la cadena en subcadenas
// filter: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//La propiedad length se utiliza porque filter nos devuelve un array con todas las p que existen en nuestra frase y .length nos devuelve el tamaño del arreglo.
const countChar = (p, phrase) => phrase.toLowerCase().split("").filter(c => c == p).length;
console.log("Cantidad de letras 'p':", countChar('p', phrase))



