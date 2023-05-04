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
const pinkiPromise = new Promise((fncCallBackResolve, fncCallBackReject)=>{
    const menorEdad =  false;

    if(menorEdad)
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
    .then((res)=>console.log('Promesa resuelta:', res))
    .catch((error)=>{console.error('Promesa rechazada: ', error)})
    
console.log('Despues de consumir la promesa');

// EJERCICIO: Una promesa que reciba dos números a y b y los divida en caso de que b sea cero, me envíe un rechazo diciéndome por que no se puede realizar la división.

const divisionPromesa = new Promise((resolve, reject)=>{
    const a = 10;
    const b = 0;
    if(b==0)
         reject('No se puede realizar la division'); 
    else
        resolve(a/b);
})

divisionPromesa
        .then((res)=>console.log('Promesa resuelta: ', res))
        .catch((error)=>console.log('Promesa rechazada: ', error));

// Haciendo la division con parametros

const divisionConParametros = (a,b)=>{
    const myPromise = new Promise ((resolve, reject)=>{
        if( b === 0)
            reject('No se puede realizar una división porque el valor es 0');
        else
            resolve(a/b);
    })

    return myPromise;
}

divisionConParametros(3,4)
        .then((res)=>console.log('Promesa resuelta: ', res)) // 0.75
        .catch((error)=>console.log('Promesa rechazada: ', error));

divisionConParametros(3,0)
        .then((res)=>console.log('Promesa resuelta: ', res))
        .catch((error)=>console.log('Promesa rechazada: ', error));