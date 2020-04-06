const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let = warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length > 8) {
    warnings += `El nombre ingresado no es valido" <br>`;
    entrar = true;
  }
  if (mensaje.value.length > 100) {
    warnings += `El mensaje supera los 100 carateres <br>`;
    entrar = true;
  }

  if (!regexEmail.test(correo.value)) {
    warnings += `El Email ingresado no es valido" <br>`;
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    Swal.fire("Gracias", "Mensaje Enviado", "success");
    form.reset();
  }
});
