console.log('Sesion  JS03');



// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */
    let nombre = 'Sergio';
    let apellido = 'Torres';
    let edadSergio = 39, edadLuis = 25;
    let numCohorteSergio = 26;
    let numCohorteLuis = 26;

    {
        /*
         bloque anidado
         Si una variable local tiene el mismo nombre de
         una varible global o de bloque superior, la varible
         local oculta las otras variables, para que la variable
         local sea usada.
         */

        let nombre = 'Luis';
        let apellido = 'SP';
        console.log(`Me llamo ${nombre} ${apellido}`);
        console.log(`Sergio: ${edadSergio} años`);
        console.log(`Luis: ${edadLuis} años`);
        console.log(`Numero de cohorte Sergio: ${numCohorteSergio}`);
        console.log(`Numero de cohorte Luis: ${numCohorteLuis}`);

    }

    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`);
    console.log(`Luis: ${edadLuis} años`);
    console.log(`Luis: ${edadLuis} años`);
    console.log(`Numero de cohorte Sergio: ${numCohorteSergio}`);
    console.log(`Numero de cohorte Luis: ${numCohorteLuis}`);
}
// console.log(`Me llamo ${nombre} ${apellido}`); //Las variables no estan definidas.
// console.log('fuera de bloque');
// console.log(`Numero de cohorte Sergio: ${numCohorteSergio}`);
// console.log(`Numero de cohorte Luis: ${numCohorteLuis}`);

// ----------- Condicional if-else ----------------

/*
    La condicional if ejecuta una sentencia si una condicion especificada es evaluada como verdadera.

    Sintaxis:
        if(condicion) sentencia

        if(condicion){
            sentencias;
        }

        if(condicion) sentencia;
        else sentencia
        }
        
        if(condicion){
            sentencias;
        }else{
            sentencias;
        }

        if(condicion){
            sentencias;
        }else if(condicion 2){
            sentencias;
        }else if(condicion 3){
            sentencias;
        }else if(condicion n){
            sentencias;
        }else{
            sentencias;
        }
*/

const temperatura = 100;
let mensaje;

// if (temperatura === 21) mensaje = `Temperatura ideal: ${temperatura} grados Celcius`;
// else mensaje = `${temperatura} grados Celcius, no es ideal`
//el true es equivalente a un 1
if (temperatura === 21) {
    mensaje = `Temperatura ideal ${temperatura}`;
}
else if (temperatura > 21 && temperatura < 40) {
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
}
else if (temperatura > 40) {
    mensaje = `Temperatura de ${temperatura} grados es super caliente, bendiciones`;
}
else if (temperatura < 21) {
    mensaje = `Temperatura de ${temperatura} grados es fría`;
}
else {
    mensaje = `Temperatura de ${temperatura} grados no existe`;
}


console.log(mensaje);


// ------ Ejercicio ------
/*
Preguntar por el numero de mes, del 1 al 12
de acuerdo al mes desplegar en un alert (o en el DOM)
la estación del año.

mes 12, 1, 2 = Invierno
mes 3, 4, 5 = Primavera
mes 6, 7, 8 = Verano
mes 9, 10, 11 = Otoño

Usar if-else
*/

const getEstacion = () => {
    const mesInput = Number(document.getElementById('mes').value);
    const output = document.getElementById('estacion');

    if (mesInput === 12 || mesInput === 2 || mesInput === 1)
        output.innerText = 'Es invierno';
    else if (mesInput >= 3 && mesInput <= 5)
        output.innerText = 'Es primavera';
    else if (mesInput >= 6 && mesInput <= 8)
        output.innerText = 'Es Verano';
    else if (mesInput >= 9 && mesInput <= 11)
        output.innerText = 'Es Otoño';
    else if (mesInput <= 0)
        output.innerText = 'No es un mes valido';

}


// --------- Switch --------------
/* 
    La instrucción Switch evalua una expresión y se compara 
    con el valor de cada instancia en 'case' y se ejecuta las
    sentencias asociadas a ese 'case' hasta que se encuentre la sentencia 'break'.

    Sintaxis:

        switch(expresión){
            case valor 1:
                sentencias;
                break;
            case valor 2:
                sentencias;
                break;
            case valor n:
                sentencias;
                break;
            default:
                sentencias;
                break;
        }
*/

/* NOTA: la evaluacion dentro del case de switch es estricta

    si no existe break se sobreescribe lo de las demas cases porque no encuentra ningun break. Va a terminar la evaluacion hasta que encuentre un break
*/
const setVelocidadVentilador = (velocidad) => {
    let message;
    switch (velocidad) {
        case 0:
            message = 'Apagado'
            break;
        case 1:
            message = 'Velocidad baja'
            break;
        case 2:
            message = 'Velocidad media'
            break;
        case 3:
            message = 'Velocidad alta'
            break;
        case 4:
            message = 'Velocidad super alta'
            break;
        default:
            message = 'El nivel no existe'
            break;

    }
    return message;
}

console.log(setVelocidadVentilador(1));