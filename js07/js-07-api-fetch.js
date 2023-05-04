console.log('JS07 API FETCH');


/*
    La API Fetch nos ayuda a acceder y manipular peticiones HTTP
    Proporciona una forma lógica y facil de obtener recursos de la red de manera
    ASINCRONA

    Sintaxis:

    Solicitud get
        fetch (url)
            .then()
            .catch();

*/
const url = 'https://fakestoreapi.com/products'
// const render = document.getElementById('render');

const getProducts = (httpUrl) => {

    fetch(httpUrl)
        .then((res) => res.json()) // Conversión de JSON a Objeto 
        .then((data) => { console.log(data)
            data.forEach(element => {
                console.log(element.title)
            });
        })
        .catch((error) => console.log(error));
}

// getProducts(url)

// ----- CONSUMIR FETCH UTILIZANDO ASYNC Y AWAIT ------

const getProductsAsyncAwait = async (httpUrl)=>{

    try {
        const productsJson = await fetch(httpUrl) // se obtiene los datos de la API en formato JSON
        const products = await productsJson.json() // Conversión de JSON a Objeto 
        products.forEach((product)=>console.log(product.title)); // Iteramos el arreglo de objetos que devolvio la linea anterior, y obtenemos el atributo title de cada producto
    } catch (error) {
        console.log(error);
    }
   
}

getProductsAsyncAwait(url)