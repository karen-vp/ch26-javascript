console.log('Sesion JS01')

//Son 7 datos primitivos:

// String: 'Hola'
console.log('Tipo de dato String', 'Hola');

//Number: 12, -45, 367.12, +Infinity, -Infinity, NaN
//Los numericos usan 64 bits para almacenar, pero solo se usan 53 bits para representar el numero.
console.log('Number');
console.log('Tipo de dato Number',12, -45, 367.12, 45/0, -56/0, 56*'hola')
console.log('Valor maximo: ', Number.MAX_VALUE);
console.log('Valor seguro: ', Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valor numéricos enteros, de los que el tipo number
// no puedo representar o no es seguro.
console.log('BigInt');
console.log("MAX_SAFE_INTEGER + 1 : ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 : ", Number.MAX_SAFE_INTEGER + 2); //No representa el valor
let myBigInt = 9007199254740991n; // se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 1n );
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 2n );

// Boolean
// Tenemos solo 2 estados: true/false
console.log('Boolean');
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

// Undefined
// Un dato que es declarado, pero no definido en el tipo
console.log('Undefined');
let myVar; // solo se declara
console.log("Tipo de dato undefined: ", myVar);

// null
// Intensionalmente se borra el tipo de dato
console.log('Null');
let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // undefined
myVarNull = "Saludos Sr. PP"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // object

// Symbol
// crea propiedades privadas en los objetos.

//-------------------------------------------
// Tipos de datos Object
// Object:
console.log('Object');
const misDatos = {
    nombre: 'Karen',
    apellido: 'Valier',
    edad: 26,
    isBelicoso: false,
    musicaPreferidaPorGenero:{
        rock: 'La celula que explota',
        corridosTumbados: 'Ella baila sola'
    },
    nombreCompleto: function fullName(){
         return `${this.nombre}  ${this.apellido}`; //this hace referencia al presente objeto.
    }
}
const misDatosDeInstagram = {
    nombre: 'Karen',
    apellido: 'Palmero',
    edad: 26,
    isBelicoso: true,
    musicaPreferidaPorGenero:{
        corridosTumbados: 'El belicoso'
    },
    nombreCompleto: function fullName(){
         return `${this.nombre}  ${this.apellido}`; //this hace referencia al presente objeto.
    }
}


console.log('Datos completos: ', misDatos);
console.log('Datos completos: ', misDatos.nombre);
console.log('Musica de fin de semana: ', misDatos.musicaPreferidaPorGenero.corridosTumbados);
console.log('Nombre completo: ', misDatos.nombreCompleto());
console.log('Nombre completo: ', misDatosDeInstagram.nombreCompleto());


// Array
// Almacena diferentes valores

const cancionesPesoPluma =  [
    'Soy el Belicón',
    'El azul',
    'El Tsurito',
    'AMG',
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

console.log(cancionesPesoPluma[4].total);
console.log(cancionesPesoPluma[4]['total']);
console.log(cancionesPesoPluma[4][2021]);
console.log(cancionesPesoPluma[4]['2021']);
console.log('Numero total de elementos: ', cancionesPesoPluma.length);
console.log('Contiene la canción AMG: ', cancionesPesoPluma.indexOf('AMG'));
console.log('Contiene la canción AMG: ', cancionesPesoPluma.indexOf('AMG')>-1);

// ----------------------------------------
// Conversión de datos

// toString
const myNumber = 420;
// Convertimos myNumber a string concatenandolo a un string
console.log('Numero de minutos en la sesión: ' + myNumber);
// Aquí usamos la clase String para convertir myNumber a string
const myNumberTxt = String(myNumber); //esta forma no es usual
console.log('Numero de minutos en la sesión: ' + myNumberTxt);

// toNumber
const myString = '420'
const sumatoria = 80 + myString;
// convierte del tipo string al tipo number
const sumatoria2 = 80 + Number(myString);
console.log('Valor de sumatoria: ', sumatoria); //80420
console.log('Valor de sumatoria: ', sumatoria2); //500

//la diferencia entre parseInt y Number es que parseInt devuelve solo los numeros enteros y Number devuelve todo el numero completo con decimales.
const myStringInt = '420.2020';
const sumatoriaInt = 80 + parseInt(myStringInt);
const sumatoriaConNumber = 80 + Number(myStringInt);
console.log('Valor de sumatoria entera: ', sumatoriaInt); //500
console.log('Valor de sumatoria entera: ', sumatoriaConNumber); //500.202

// toBoolean
const isBelicoso = 'true';
if(isBelicoso == 'true')
     console.log('Denle su Belikin porque es: ', isBelicoso)
else 
    console.log('Abra paso a la barredora');

// Boolean
// para que sea False, debe ser: "", 0, null, undefined
// Number
// 

