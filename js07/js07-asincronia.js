console.log('JS07 - ASINCRONIA');


// ---------- Desarrollo sincrono (secuencial) -------------
const primerPaso = () => {
    console.log('01 - Inicio de mi programa JS07');
}
const segundoPaso = () => {
    console.log('02 - Desarrollo de mi programa JS07');
}
const tercerPaso = () => {
    console.log('03 - Fin de mi programa JS07');
}

primerPaso()
segundoPaso()
tercerPaso()

// ------------- Programación Asíncrona -----------
// setTimeout()
// Establece un temporizador que ejecuta una función una vez que expire el temporizador

const desarrolloAsincrono = (saludo) => {
    console.log('Hola ' + saludo);
}

const segundoPasoAsincrono = (saludo) => {
    // setTimeout(desarrolloAsincrono, 4000, saludo);
    // setTimeout((saludoRef)=> console.log('Hola ' + saludoRef), 
    // 4000, 
    // saludo)
    setTimeout(() => console.log('Hola ' + saludo), 4000)
}

primerPaso();
// setTimeout(desarrolloAsincrono, 3000, 'ch26' );
segundoPasoAsincrono('ch26  con 4s de retardo');
tercerPaso();


// ---------- setInterval ---------------
// Ejecuta una función de manera reiterada con un tiempo de retardo fijo entre cada llamada 

const segundoPasoConIntervalo = (saludo) => {
    setInterval(() => console.log(`La banda malandra es ${saludo}`), 2000);
}

console.log('------- setInterval ----------');
primerPaso();
// segundoPasoConIntervalo('ch26, wu, wu');
tercerPaso();


// ------------ Iniciar y detener setInterval ------------

// Aqui estamos haciendo una funcion para habilitar y deshabilitar los botones de inicio y detener
const stateButtons = (startState, stopState)=>{
    btnIniciar.disabled = startState;
    btnDetener.disabled = stopState;
}

const disableStart = ()=>{
    stateButtons(true, false);
}
const enableStart =()=>{
    stateButtons(false, true);
}

const btnIniciar = document.getElementById('iniciar');
const btnDetener = document.getElementById('detener');
const dateH2 = document.getElementById('fecha');
let idInterval;
enableStart()

// El primer parametro que manda el addEventListener es el event
btnIniciar.addEventListener('click', () => {
    idInterval = setInterval(() => dateH2.innerHTML = new Date().toLocaleString(), 1000);
    disableStart();
});
// Detener mi intervalo
btnDetener.addEventListener('click', () => {
    clearInterval(idInterval);
    enableStart();
});