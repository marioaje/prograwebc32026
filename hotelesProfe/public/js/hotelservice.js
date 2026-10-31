import { API } from "./config.js";

//Get  https://paginas-web-cr.com/Api/hotelApi/hotel/hotel.php 




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


    //  correo
    // : 
    // "villasparaiso@gmail.com"
    // descripcion
    // : 
    // "Hotel 5 Estrellas"
    // estado
    // : 
    // "Activo"
    // fecha_creacion
    // : 
    // "2026-10-25 21:43:15"
    // id
    // : 
    // 368
    // nombre
    // : 
    // "Hotel Villas Paraíso"
    // sitio_web
    // : 
    // "https://hotelvillasparaiso.com"
    // telefono
    // : 
    // "2229-2929"
    // usuario
    // : 
    // "jose" 

}



consultarHoteles();



//modalEditar