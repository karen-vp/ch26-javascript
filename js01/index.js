console.log('Sesion JS01')

//Son 7 datos primitivos:

// String: 'Hola'
console.log('Tipo de dato String', 'Hola');

//Number: 12, -45, 367.12, +Infinity, -Infinity, NaN
//Los numericos usan 64 bits para almacenar, pero solo se usan 53 bits para representar el numero.
console.log('Tipo de dato Number',12, -45, 367.12, 45/0, -56/0, 56*'hola')
console.log('Valor maximo: ', Number.MAX_VALUE);
console.log('Valor seguro: ', Number.MAX_SAFE_INTEGER);

//BigInt
//Sirven para representar valores numéricos enteros, de los que el tipo number no puede representar o no es seguro.

//-------------------------------------------
//Tipos de datos Object
//Object:
const misDatos = {
    nombre: 'Karen',
    apellido: 'Valier',
    edad: 26,
    isBelicoso: false,
    musicaPreferidaPorGenero:{
        rock: 'La celula que explota',
        corridosTumbados: 'Ella baila sola'
    }
}

console.log('Datos completos: ', misDatos)
console.log('Datos completos: ', misDatos.nombre)
console.log('Musica de fin de semana: ', misDatos.musicaPreferidaPorGenero.corridosTumbados)

