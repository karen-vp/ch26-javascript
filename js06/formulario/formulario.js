console.log('Sesion JS06-Formulario');

// --------- Obteniendo la referencia del form ----------------
// document.forms localiza los formularios en el html, estamos obteniendo la referencia a nuestro formulario con el id='registro';
const formRef = document.forms['registro'];

// -------------Obteniendo los valores del formulario----------
// Sintaxis: form.addEventListener('action', funcionCallback );
formRef.addEventListener('submit',  (event)=>{
    event.preventDefault(); // Omite las acciones por default, y una de esas acciones es que te refresca el navegador.
    console.log(event);
    
    const email = formRef.elements['inputEmail4'].value;
    // console.log(email);
    const password = formRef.elements['inputPassword4'].value;
    const address = formRef.elements['inputAddress'].value;
    const city = formRef.elements['inputCity'].value;
    const state = formRef.elements['inputState'].value;
    const zip = formRef.elements['inputZip'].value;
    const checkBox = formRef.elements['gridCheck'].checked; // checked es para ver el valor del checkbox, es decir, si el checkbox es true o false
    
    const user = {
        email,
        password,
        address,
        city,
        state,
        zip,
        checkBox
    }
    console.log(user);
});

