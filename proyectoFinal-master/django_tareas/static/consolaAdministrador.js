function editarUsuario(idEditar)
{
    console.log(idEditar)
    fetch(`/conseguirInfoUsuario?idEditar=${idEditar}`)

    .then(response => response.json())
    .then(data => {
        let usernameMod = document.getElementById('usernameMod')
        let emailMod = document.getElementById('emailMod')
        let nombreMod = document.getElementById('nombreMod')
        let apellidoMod = document.getElementById('apellidoMod')
        let ingresoMod = document.getElementById('ingresoMod')
        let cargaId = document.getElementById('cargaId')

        usernameMod.value = data.username
        emailMod.value = data.email
        nombreMod.value = data.nombre
        apellidoMod.value = data.apellido
        ingresoMod.value = data.username
        cargaId.innerHTML = data.cargaId
    })
}

function actualizarUsuario()
{
    /*
    PREGUNTA 4
    Capturar los datos de los campos input's de la ventana de editar usuario,
    el id del usuario lo puedes capturar de la carga realizada en el elemento
    H1 cuyo id es cargaId. Con los datos capturados postearlos en la base de datos
    y actualizar la informacion del usuario
    */
    let profesionMod = document.getElementById('profesionMod')
    let celularMod = document.getElementById('celularMod')
    let indusuario = document.getElementById('cargaId')
    
    datos = {
        'profesionUsuario':profesionMod.value,
        'nroCelular':celularMod.value,
        'idusuario' : indusuario.innerHTML,
    }
    

    fetch('/ModificarDatosUsuario',{
        method:"POST",
        headers:{
            "X-Requested-With":"XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body:JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        editarUsuario(indusuario.innerHTML)
    })
}

function getCookie(name)
{
    let cookieValue = null;
    if(document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if(cookie.substring(0,name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue 
}