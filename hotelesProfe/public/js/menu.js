document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("menu");

    if (!menu) return;


    menu.innerHTML = `<ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page"
              >Active link</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html">Inciio</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://paginas-web-cr.com/Api/form/consultarcurso.php"
              target="_blank"
              >Mostrar Cursos</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://127.0.0.1:20021/Semana%206/curso.html"
              target="_blank"
              >Crear Cursos</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://127.0.0.1:20021/Semana%206/editarcurso.html"
              target="_blank"
              >Editar Cursos</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://127.0.0.1:20021/Semana%206/eliminarcurso.html"
              target="_blank"
              >Eliminar Cursos</a
            >
          </li>
        </ul>`;



})