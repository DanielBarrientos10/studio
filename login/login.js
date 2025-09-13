//Obtener referencias a los elementos del formulario
const formulario = document.getElementById('login')
const correoInput = document.getElementById('correo')
const contraseñaInput = document.getElementById('contraseña')
const botonInicioSesion = document.getElementById('boton')

//Agregar un evento de escucha al botón de iniciar sesion
botonInicioSesion.addEventListener('click', function(event){
    event.preventDefault(); //Evitar que el form se envie automaticamente

    //Realizar las validaciones
    if (!validarCorreo(correoInput.value)){
        MostrarError(correoInput,'por favor ingrese un correo valido')
    }else if (contraseñaInput.value === ''){
        MostrarError(contraseñaInput, 'por favor ingresar contraseña valida')
    }else{a
        //si todas las validaciones son exitosas puede continuar con el envio de datos
        formulario.submit();
    }
 
});

//Funcion para validar formato de correo electronico

function validarCorreo(correo){
    //Utilizar una expresion regular para verificar si el correo tiene un formato válido
const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
return regexCorreo.test(correo)
}

//funcion para mostrar error

function MostrarError(input, mensaje){
 const errorMensaje = document.createElement('p')//aqui nos crea un elemento de html <p> donde se va almacenar en caso error
 errorMensaje.className = 'error-mensaje';
 errorMensaje.textContent = mensaje;

 const contenedorinput = input.parentElement;
 contenedorinput.appendChild(errorMensaje);
 
 //agregar una clase de estilo para resaltar el 
 contenedorinput.classlist.add('error');
}

//limpiar los mensajes de error al escribir en los campos
correoInput.addEventListener('input', limpiarError);
contraseñaInput.addEventListener('input', limpiarError);

function limpiarError (){
    const contenedorinput = this.parentElement;
    const errorMensaje = contenedorinput.queryselector('.error-mensaje');

    if(errorMensaje){
        contenedorinput.removechild(errorMensaje);
        contenedorinput.classlist.remove('error');
    }
}
