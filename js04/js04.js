console.log('Sesion JS04');


// Declarar un array

const nombresCh26 = ['Sofi', 'Alejandro', 'Ixchel', 'Said'];

// Usando el constructor de arreglos

const apellidosCh26 = new Array('Montellano', 'Torres', 'Vazques');
// Si le indicamos un numero a new Array, nos crea un array vacio con 4 espacios vacios
const numCajas = new Array(4); // [,,,]
const numCohortesActivas = new Array(26, 27, 28, 29);

// console.log(`Apellido de Sergio ${apellidosCh26[1]}`);

//Agregar un nuevo apellido al final del arreglo apellidos

apellidosCh26.push('Ruiz');
// console.log(apellidosCh26);

//  Matrices (arreglos de dos dimensiones)
//  Se usan Arrays anidados
// [[] , [] , []]

const personasEnCohorte = [
 /*ch26 */['Arath', 'Jose', 'Karen', 'Sofi'],
 /*ch27 */['Manuel', 'Maria', 'Francisco', 'Pablo', 'Pepe'],
 /*ch28 */['Doris', 'Brendan', 'Lucas']
];

// console.log('Personas en CH27: ' + personasEnCohorte[1].join(', '));
// console.log('Paco de CH27: ', personasEnCohorte[1][2]);
// console.log('Lucas de CH28: ', personasEnCohorte[2][2]);
// console.log('Karen de CH28: ', personasEnCohorte[0][2]);
// personasEnCohorte[1][3] = 'kfc';
// console.log('Personas en CH27: ', personasEnCohorte[1]);

// Arreglo de 3 dimensiones 
// myArray3D = [ [[], [], []], [[], [], []] ];
// Para acceder es así: myArray3D[][][];

// Usando for para iterar en una Matriz
/*
    Consideraciones para el ciclo for
    - No es necesario indicar el inicio, la comparacion y la expresión final, pero no es recomendable

    Sintaxis:
        for(inicio; comparación; expresiónFinal){
            sentencias;
        }

*/
// Break: Rompe con la iteración en curso y sale del ciclo
let nIteracion = 0;
for( ; ; ){
    console.log(nIteracion);
    if(nIteracion === 5)break;
    nIteracion++;
}

console.log('Iterando con for una matriz');
for (let fila = 0; fila < personasEnCohorte.length; fila++) {
    console.log(`Indice ${fila}: ${personasEnCohorte[fila]}`);
    for (let columna = 0; columna < personasEnCohorte[fila].length; columna++) {
        console.log(`Nombre: ${personasEnCohorte[fila][columna]}`);
    }
}


//  Usando forEach para iterar Matriz
console.log('Iterando con forEach una matriz');
personasEnCohorte.forEach( fila => fila.forEach(columna=> console.log(columna)));

/*
    Usando For of para iterar 

    Ejecuta sentencias por cada elemento de un objeto iterable (arrays, strings y objetos)
*/

// Ejemplo iterando un string con for of
const myName = 'Sergio';

for(let character of myName) 
    console.log(character);

// Ejemplo iterando una matriz
console.log('Iterando con for of una matriz');
for (let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna);
    }
}


// ------------- Ejercicio -------------
console.log('---- Parar cuando encuentre a Maria -----');
//  El label debe estar antes del ciclo que va a romper y no debe haber nada despues que no sea el ciclo
personas: //se usa un label para indicar en el break hacia que ciclo romperá
 for (let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna)
        if(columna == 'Maria') break personas; // Se indica el label que rompe
    }
}


// ----------- Ciclo do while -----------
/*
    Crea un bucle que ejecuta una sentencia hasta que la condición de comprobación se evalue como falso. La condicion se evalua despues de ejecutar la sentenciam por lo que la sentencia se ejecuta por lo menos una vez.

    Sintaxis:

    do{
        sentencias
    }while(comprobación);
*/
// ----- Ejercicios con while y do - while ----------
let iteration = 0;
// do{
//     iteration++;
//     console.log('Numero iteración en do-while: ' + iteration);
// }while(confirm('Deseas continuar?'));

let valor = -2;
while(valor<5){
    console.log('While ' + valor);
    valor++;
}
valor = 5;
do{
    console.log('Do - While ' + valor);
    valor++;
}while(valor < 5);

/*
    FIFO: First input, First output
    LIFO: Last input, First output
*/

const alimentos = [];

//  Usar FIFO:First input, First output
alimentos.push('Manzanas del lunes');
alimentos.push('Manzanas del miercoles');
console.log(alimentos);

//  Sacar las manzanas en FIFO
console.log('Sacando las manzanas antiguas: ' + alimentos.shift());
console.log(alimentos);
console.log('Sacando las manzanas antiguas: ' + alimentos.shift());
console.log(alimentos);

// Usar LIFO - Last input, First output
const productos = [];
// Temporada navideña
productos.push('Desarmadores');
productos.push('Luces de colores');
console.log(productos);
console.log('Sacando el ultimo producto: ' + productos.pop());
console.log(productos);





