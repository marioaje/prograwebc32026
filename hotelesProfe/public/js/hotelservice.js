import { API } from "./config.js";

//Get  https://paginas-web-cr.com/Api/hotelApi/hotel/hotel.php 
//JQuery, metodo que espera que cargue todo el html
$(document).ready(function () {
    consultarHoteles();

    $("#formularioEditar").submit(function (eventos) {
        eventos.preventDefault();
        alert("guarde");
    });
});


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
    document.getElementById("usuario").value = datos.usuario;

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