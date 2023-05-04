console.log('Sesion JS06');



const findElementByID = (nameOfDeveloper)=>{
    const tituloRef = document.getElementById('titulo');
    tituloRef.innerHTML = tituloRef.innerHTML + nameOfDeveloper;
}

findElementByID(', Sergio');


const changeSubtitleById = (newText)=>{
    const subtitleRef = document.getElementById('subtitulo');
    subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newText}</em>`;

}

changeSubtitleById('viernes de cholos');


// ---------- Encontrar elementos por su tag -------
// getElementsByTagName()


const changeEmphasis = (newText, url) =>{
    const emphasisRef = document.getElementsByTagName('em');
    // console.log(emphasisRef);
    for (element of emphasisRef) {
        // console.log(element);
        element.innerHTML = `<a href="${url}" target="_blank">${newText}</a>`;
    }
}
changeEmphasis('viernes friki', 'https://www.deviantart.com/');

// ---------------- Selector universal -----------------

const findElementsByQuerySelector = ()=>{
    const refElements = document.querySelector('p em');
    console.log(refElements);
    refElements.innerHTML = `La Ch 26 es bien <strong>chida</strong> y les gusta el 11:11`;
}

findElementsByQuerySelector();


// ------ Crear nuevo elemento ---------
// appendChild

const newElement = () =>{
    const newElementRef = document.createElement('p');
    newElementRef.innerHTML = `La Ch 26 le gusta: 
    <ul>
        <li>Pan de muerto</li>
        <li>Chismesito</li>
        <li>Pozole</li>
        <li>Pizza</li>
        <li>Pulque</li>
    </ul>` ;

    const articleRef = document.querySelector('article');
    articleRef.appendChild(newElementRef);

    // Clonar el nodo anterior, por medio del metodo cloneNode(y le pasamos true)
    const nodoClonado = articleRef.cloneNode(true);
    // Le estamos anexando ese nodo clonado a un article con un id de 'article-news'
    document.getElementById('article-news').appendChild(nodoClonado);

}

newElement();


// ----------- Cambiar color de texto a un elemento -------------

const changeColor = (color) => {
    const refIntro = document.getElementById('noticias');
    refIntro.style.color = color;

}

changeColor('violet');

// ------------ Agregar a un elemento un border ----------------
// .style.border
// .style.border = 'thick solid black

const changeBorder = (element, border) =>{
    const refNews = document.getElementById(element);
    refNews.style.border = border;
}

changeBorder('article-news', '5px solid black');


// ------------ Propiedades de visualización  --------------
// Desaparecer elementos
// display: none (Quita el elemento del DOM)
// visibility: hidden (Oculta el elemento)


const quitarBoton = ()=>{
    const buttonRef = document.getElementById('button-b');
    buttonRef.style.display = 'none';
}

const ocultarBoton = ()=>{
    const buttonRef = document.getElementById('button-b');
    buttonRef.style.visibility = 'hidden';
}

// Reestablecer boton

const resetBoton = ()=>{
    const buttonRef = document.getElementById('button-b');
    buttonRef.removeAttribute('style');
   
}