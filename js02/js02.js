console.log('Sesion JS02');


// ----------Función declarada-----------
// function declaration, function statement
// Una característica es que las funciones declaradas tiene hoisting.

// El hoisting es un comportamiento que ocurre durante la compilación del código en el cual las funciones son movidas hacia la parte superior del ámbito actual antes de que se ejecute el código. 

console.log('El resultado de 5*10 es = ' + multiplica(5,10));
console.log(multiplica(5,10));
console.log(multiplica(8,8));
console.log(multiplica(-4,2));

function multiplica(a,b){
    return a * b;
}

function divide(dividendo, divisor){
    return dividendo/divisor;
}


console.log(divide(5,2)) // 2.5
console.log(divide(5,'2')); // 2.5
console.log(divide('5','2')); // 2.5
console.log(divide('5 0', '2')) // NaN
