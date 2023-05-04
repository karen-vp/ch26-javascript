console.log('JS07 - Promesas');

/*
    ----------- PROMESAS -----------
    Una promesa (promise) es un objeto que representa la terminación o fracaso de una operacion asíncrona


    Para crear una promesa se usa el constructor new Promise(funcionCallback);
    y la promesa es un OBJETO de la clase Promise, y como argumento recibe una funcion callback (puede ser funcion flecha), la cual recibe dos argumentos (funcionResolve, funcionReject),
    funcionResolve - Es lo que se va a hacer cuando se resuelva la promesa.
    funcionReject - Es lo que va a hacer cuando se rechaze la promesa
*/

// Declarando la promesa
const pinkiPromise = new Promise((fncCallBackResolve, fncCallBackReject) => {
    const menorEdad = false;

    if (menorEdad)
        fncCallBackResolve('Hay que estar siempre juntos');
    else
        fncCallBackReject('No te conozco');
})

// ---------- Consumir las promesas ----------------
/*
    Usando los métodos then, catch y finally
    then - consume la parte del resolve de la promesa
    catch - consume la parte del reject de la promesa
*/

console.log(pinkiPromise);

console.log('Antes de consumir la promesa');

pinkiPromise
    .then((res) => console.log('Promesa resuelta:', res))
    .catch((error) => { console.error('Promesa rechazada: ', error) })

console.log('Despues de consumir la promesa');


// ------------------ Ejercicio DIVISION DE NUMEROS -------------------
// DESCRIPCION DE EJERCICIO: Una promesa que reciba dos números a y b y los divida en caso de que b sea cero, me envíe un rechazo diciéndome por que no se puede realizar la división.

//  Esto es una promesa que divide los numeros, pero no es dinamica, porque no pide los numeros como argumentos al usuario

// const divisionPromesa = new Promise((resolve, reject) => {
//     const a = 10;
//     const b = 0;
//     if (b == 0)
//         reject('No se puede realizar la division');
//     else
//         resolve(a / b);
// })

// divisionPromesa
//     .then((res) => console.log('Promesa resuelta: ', res))
//     .catch((error) => console.log('Promesa rechazada: ', error));


// EJERCICIO DE DIVISION DE FORMA DINAMICA
// Esta es una funcion flecha que hace la división y pide los numeros para dividir como argumentos, y dentro tiene una promesa


const divisionConParametros = (a, b) => {
    const myPromise = new Promise((resolve, reject) => {
        if (b === 0)
             reject('No se puede realizar una división porque el valor es 0');
            // Esto es lo mismo que el reject de arriba pero lo unico que hacemos es retardar un poquito el mensaje de reject con el setTimeout.
            // setTimeout(()=> reject('¡DIVISION POR CERO!'), 5000);
        else
            resolve(a / b);
    })

    return myPromise;
}

// -------- CONSUMIENDO LA PROMESA DE DIVISION CON PARAMETROS CON THEN, CATCH Y FINALLY -------

// Los then encadenados devuelven lo del then anterior en el argumento de la funcion callback dentro de ese then.

//NOTA: las funciones flecha cuando se hacen en una sola instruccion no requiere llaves ni la palabra return, solo se nececita colocar si vamos a tener varias instrucciones dentro de nuestra funcion (las llaves y la palabra return);
divisionConParametros(3, 4)
    .then((res) => {
        console.log(res); // 0.75
        return res + 10;  // el valor de este return se va a devolver en el then siguiente
    })
    .then((mas10Unidades) => console.log(mas10Unidades)) // 10.75
    .catch((error) => console.log('Promesa rechazada: ', error))
    .finally(() => console.log('Se realizo la division'));

divisionConParametros(3, 0)
    .then((res) => console.log('Promesa resuelta: ', res))
    .catch((error) => console.log('Promesa rechazada: ', error));


// CONSUMIR LAS PROMESAS CON ASYNC Y AWAIT, esto es otra forma de consumir las promesas, 
// NOTA: De esta forma no se estan manejando las excepciones, eso se hace con TRY y CATCH 

const realizarDivisionSincrona = async () => {
    console.log('---Resolviendo divisiones---');
    const resultado = await divisionConParametros(20, 4); // 5
    console.log(resultado);
    console.log(resultado + 100); // 105
    console.log('---Terminando divisiones---');
}

realizarDivisionSincrona();

// ---- MANEJO DE EXCEPCIONES CON TRY Y CATCH PARA ASYNC Y AWAIT --------
// ASYNC Y AWAIT no maneja el error de las promesas como en el caso de .catch, para eso usaremos el TRY CATCH para manejar las excepciones usando ASYNC y AWAIT

const manejoDeExcepciones = async () => {
    console.log('---Resolviendo divisiones usando TRY y CATCH---');

    try {
        const resultadoErroneo = await divisionConParametros(20, 0); 
        console.log('ASYNC y AWAIT ' + resultadoErroneo);
    } catch (error) {
        console.error('ASYNC y AWAIT ' + error);
    }

    console.log('---Terminando divisiones usando TRY y CATCH---');

}

manejoDeExcepciones();