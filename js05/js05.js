console.log('Sesion JS05');

// ------- Operadores aritmeticos -------

// Adicion +
// Multiplicacion *
// Substracción -
// Division /
// Exponencial **
// Resto %

let dinero;


// ------ Operadores de asignación ---------
// Asigna un valor a su operando izquiero basandose en el valor de su operando derecho
// Asignacion = 
// Asignacion += 
dinero += 15;
// Multiplicacion *=
// Substracción -=
// Division /=
// Exponencial **=
// Resto %=

// La suma se hace de izq a derecha y la mayoria de operaciones aritmeticas son de izquierda a derecha
// Los de asignacion van de derecha a izquierda
// El exponente se hace de derecha a izquierda


// ------------ Operadores Unarios -------------
// Un operador unario realiza una operacion en un solo operando
// Negación -
dinero = - 3; // solo asigna a la variable dinero el -3 (no es lo mismo que el de asignacion);
console.log(dinero);
// Conversion a Numerico +
dinero = +dinero; // Sigue siendo -3
dinero = +"200"; // convierte el "200" a numerico
console.log(dinero);
// typeof
// Operador logico not !
let valorBooleano = true;
console.log(!valorBooleano);

// Operadores de incremento y decremento
// Operador de pre-incremento y pre-decremento
// preincremento ++valor
// predecremento --valor

//  Operador de post-incremento y post-decremento
// post-incremento valor++
// post-decremento valor--
let numero = 10;
numero++; // 11
++numero; // 12
console.log(numero) // 12

// NOTA: NO HAY NINGUNA DIFERENCIA EN USAR POST O PRE INCREMENTO O DECREMENTO (SOLO SI ESTAN SOLOS)
// En cambio si tienen otra valor en conjunto o otro operador como el de asignacion (=) si hay diferencia

let nuevoValor = numero++;
/*
    let nuevoValor = numero; Primero se asigna a la variable nuevoValor el valor de numero que era 12
    numero = numero + 1; // y luego se incrementa 
*/

console.log('Nuevo valor: ', nuevoValor); // 12
console.log('Numero: ', numero); // 13

let nuevoDato = ++numero;

/*
    numero = numero + 1;
    nuevoDato = numero;
*/

console.log('nuevoDato', nuevoDato); // 14
console.log('numero', numero); // 14


let x = 3;
let y = ++x;
console.log(`x ${x++} y ${++y}`); //4, 5
// en el post-incremento (x++) se entrega primero el valor y luego se hace el incremento 
// en el pre-incremento (++y) se incrementa primero el valor y luego se entrega el valor.
console.log(`x ${x} y ${y}`); //5, 5

// ---------- Operadores lógicos AND && y OR || -------------

const a = true;
const b = false;
const c = true;
console.log(a || b && c);

// Operadores corto circuito
// Cuando los operadores lógicos AND y OR actuan sobre operandos diferentes a booleanos.

// OPERADOR1 && OPERADOR2  Si OPERADOR1 es verdadero, se realiza el resultado de OPERADOR2
console.log(a && 'Holi Crayoli');
console.log(b && 'Holi Crayoli');
console.log(NaN && 'El valor es un número que se puede procesar');
console.log('El valor es un número que se puede procesar' && NaN);
console.log('false' && 'El valor es false');
console.log(b && 0);



// OPERADOR1 || OPERADOR2 si OPERADOR1 es verdadero, se realiza el resultado de OPERADOR1

console.log(a || 'Holi Crayoli');
console.log(b || 'Holi Crayoli');
console.log(NaN || 'El valor es un número que se puede procesar');
console.log('false' || 'El valor es false');
console.log('' || 'No hay dato');

const noDefinido = true;
console.log(noDefinido || theBigBang);


// Quiero imprimir 'Estas Autorizado' si la variable isOnline y isActive son true
const isOnline = true;
const isActive = true;
if (isOnline)
    if (isActive)
        console.log('Estas Autorizado');


if (isOnline && isActive)
    console.log('Estas Autorizado');

console.log(isOnline && isActive ? 'Estas Autorizado' : 'No estas autorizado');

console.log(isOnline && isActive && 'Estas Autorizado');

// ------------ Operadores relacionales ---------------
/*
    Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.

    < menor que
    > mayor que
    <= menor o igual que
    >= mayor o igual que
    == igual que
*/

// da false porque el true se convierte a numero y da 1, y el 'true' se intenta convertir a numero y da un NaN, por lo tanto 1 == NaN es false.
console.log(true == 'true'); // false

console.log(23 < '40');

// En valores Unicode las mayusculas son menores a las minusculas
// Valores Unicode b = 98 y A = 65 (98 < 65);
console.log('b' < 'A'); // false

console.log('Hola' < 'HOLA'); // false, porque si empiezan con el mismo tipo de caracter (H mayuscula) se sigue comparando con las siguientes letras.

// En la tabla Unicode los numeros siguen siendo menores a las minusculas
// Valores Unicode H= 72 y 1= 49;
console.log('Hola' < '123'); // false

// se va comparando cada caracter en ambas palabras respecto a su valor Unicode
// se hace primero la concatenacion por su valor de precedencia y despues se compara
console.log('Hola' < 'KeHace' + 1000); // true

console.log('23' == 23); // true


// ---------------- Comparación estricta -------------------
/*
    === Estrictamente igual, debe ser igual en el valor y tipo
    !== Estrictamente diferente, debe ser diferente en valor y tipo
*/

console.log('23' === 23); // false
console.log('true' === true); // false
console.log('45' !== 45); // true

// Operador de asignación = 
const myNumber = 34;

// Desestructuración (Destructuring)
/*
    Es una expresión en JS que hace posible extrar datos de arreglos o objetos y nos ayuda a realizar asignaciones más complejas.
*/

let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA} , b:${dataB} `);

// Quiero intercambiar los datos
// let temporal;
// temporal = dataA;
// dataA = dataB;
// dataB = temporal;
// console.log(`a: ${dataA} , b:${dataB} `);

// Quiero intercambiar los datos usando destructuring
[dataA, dataB] = [dataB, dataA]
console.log(`a: ${dataA} , b:${dataB} `);


// Asignamos los primeros elementos del arreglo calificaciones a las variables dataA y dataB en su respectivo orden.
const calificaciones = [50, 80, 100, 30];

[dataA, dataB] = calificaciones;
console.log(`a: ${dataA} , b:${dataB} `);

// Si queremos que dataB tenga el valor de 30, ponemos (,) para designar los espacios
[dataA, , , dataB] = calificaciones;
console.log(`a: ${dataA} , b:${dataB} `);

// Usando un rest parameter para guardar los datos que restantes de un arreglo
let resto;
[dataA, dataB, ...resto] = calificaciones;
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);


// Destructuring en un objeto

const primerAnio = {
    dataA: '43 alumnos',
    dataB: '50 alumnos',
    dataC: '20 alumnos'
};

// Se encierra en parentesis para que sepa que estamos haciendo una sola Operacion.
({ dataA, dataB, dataC } = primerAnio);

console.log(`a: ${dataA} , b:${dataB}, c: ${dataC} `);

const auto = {
    model: 'Chevrolet',
    year: 2023,
    color: 'red',
    motor: '2.0'
}
console.log('Modelo ' + auto.model);

// Asignando el valor de la propiedad model del objeto auto a la constante model.
// Es decir, estamos definiendo la constante model y con destructuración se asigna el atributo model a la constante model, y se tienen que llamar igual tanto el atributo como la constante.

// Si quiero cambiarle el nombre a mi variable, colocamos 
// el atributo de nuestro objeto : y el nuevo nombre de variable
// color: colorAuto

const { model, color: colorAuto } = auto;
console.log('Modelo ' + model + ' color: ' + colorAuto);

// Para asignar valor por default a nuestras variables es de la siguiente manera
// const {model, color: colorAuto = 'Pistache'} = auto;

// ---------------- Ejercicio ----------------

/*
    Hacer una función que realice la division de 2 numeros y me entregue (return) en entero el cociente y residuo

*/

const division = (a, b) => {
    const divide = parseInt(a / b);
    const residue = a % b;

    return { divide, residue }
}

const { divide, residue } = division(9, 5);
console.log(`El valor de la division es: ${divide} y el residuo es ${residue}`);

// console.log(`El valor de la division es: ${division(10,5).divide} y el residuo es ${division(10,5).residue}`);
