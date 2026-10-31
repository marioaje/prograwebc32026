import { API } from "./config.js";

//Get  https://paginas-web-cr.com/Api/hotelApi/hotel/hotel.php 
//JQuery, metodo que espera que cargue todo el html
$(document).ready(function () {
    consultarHoteles();

    $("#formularioEditar").submit(function (eventos) {
        eventos.preventDefault();
        actualizarDatos();
    });
});

export async function actualizarDatos() {

    const correo = document.getElementById("correo").value;
    const descripcion = document.getElementById("descripcion").value;
    //  document.getElementById("estado").value = datos.estado;
    //  document.getElementById("fecha_creacion").value = datos.fecha_creacion;
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const sitio_web = document.getElementById("sitio_web").value;
    const telefono = document.getElementById("telefono").value;
    const usuario = "Profe Mario";

    const hotel = {
        "correo": correo,
        "descripcion": descripcion,
        "id": id,
        "nombre": nombre,
        "sitio_web": sitio_web,
        "telefono": telefono,
        "usuario": usuario
    };

    console.log(hotel);

    const respuesta = await fetch(API.HOTEL,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hotel)
        }
    );

    if (!respuesta.ok) {
        throw new Error("Error el servdidor de hotel." + respuesta.status);
    }
    const dats = await respuesta.json();

    console.log("Json de la respuesta", dats);

    consultarHoteles();

    bootstrap.Modal.getInstance($("#modalEditar")[0]).hide();
}


export async function consultarHoteles() {
    //Fecth sirve para invocar o enviar datos por APIS
    const respuesta = await fetch(API.HOTEL);

    if (!respuesta.ok) {
        throw new Error("Error al consultar el servdidor de hotel.");
    }

    const dats = await respuesta.json();

    console.log("Json de la respuesta", dats.data);

    pintarTabla(dats.data);
}

window.mostrarEditar = function (identificador) {

    const modalEditar = new bootstrap.Modal($("#modalEditar")[0]);
    modalEditar.show();
    // alert(identificador);
    cargardatosFormularioEditar(identificador);
}



export async function cargardatosFormularioEditar(identificador) {


    const urlGetByID = `${API.HOTEL}?id=${identificador}`;

    //Fecth sirve para invocar o enviar datos por APIS
    const respuesta = await fetch(urlGetByID);

    if (!respuesta.ok) {
        throw new Error("Error al consultar el servdidor de hotel.");
    }

    const dats = await respuesta.json();

    console.log("Json de la respuesta", dats.data[0]);

    cargarInputsEditar(dats.data[0]);
}
function cargarInputsEditar(datos) {
    document.getElementById("correo").value = datos.correo;
    document.getElementById("descripcion").value = datos.descripcion;
    //  document.getElementById("estado").value = datos.estado;
    //  document.getElementById("fecha_creacion").value = datos.fecha_creacion;
    document.getElementById("id").value = datos.id;
    document.getElementById("nombre").value = datos.nombre;
    document.getElementById("sitio_web").value = datos.sitio_web;
    document.getElementById("telefono").value = datos.telefono;


}

function pintarTabla(datos) {

    const tablaHotels = document.getElementById("tablaHotels");
    tablaHotels.innerHTML = "";

    // <th scope="col">Id</th>
    // <th scope="col">Nombre</th>
    // <th scope="col">Descripcion</th>
    datos.forEach(elementIndividuales => {
        tablaHotels.innerHTML += `
                <tr class="">
                    <td scope="row">${elementIndividuales.id}</td>
                    <td>${elementIndividuales.nombre}</td>
                    <td>${elementIndividuales.descripcion}</td>
                    <td>${elementIndividuales.estado}</td>
                    <td>${elementIndividuales.telefono}</td>
                    <td>${elementIndividuales.sitio_web}</td>
                    <td>${elementIndividuales.usuario}</td>
                    <td>${elementIndividuales.fecha_creacion}</td>     
                    <td>
                            <a
                            name=""
                            id=""
                            class="btn btn-success"
                            href="#"
                            role="button"
                            onclick="mostrarEditar('${elementIndividuales.id}')"
                            >Editar</a> || 
                                                        <a
                            name=""
                            id=""
                            class="btn btn-danger"
                            href="#"
                            role="button"
                            >Eliminar</a> 
                   </td>                    
                </tr>
        `
    });

}







//modalEditar