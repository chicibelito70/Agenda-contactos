function cargarContactos(){
    var Contactos = document.getElementById('Contactos');  
    Contactos.innerHTML = "";
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(datos){
        return datos.json();
    }).then(function (datos){
        datos.forEach(
            function(contacto){
                Contactos.innerHTML += "<b>"+contacto.nombre + "</b> " + contacto.apellido + " <i>" + contacto.telefono +"</i><br/>";
            }
        )
    })
}

function mostrarContacto(nombre, apellido, telefono){
    var Contactos = document.getElementById('Contactos');  
    Contactos.innerHTML += "<b>"+nombre + "</b> " + apellido + " <i>" + telefono +"</i><br/>";
}

function agregarContacto(){
    var Nombre = document.getElementById('Nombre');
    var Apellido = document.getElementById('Apellido');
    var Telefono = document.getElementById('Telefono');
    var contacto = {nombre: Nombre.value, apellido:Apellido.value, telefono :Telefono.value};
    fetch("http://www.raydelto.org/agenda.php",
        {
          method: 'POST',
          body: JSON.stringify(contacto)
        }
    ).then(function(respuesta){
        return respuesta.json()
    }).then(function(respuesta){
        if(respuesta.exito === true){
            mostrarContacto(Nombre.value,Apellido.value, Telefono.value);
        }
    })    
    
}