
var respuestaNombre; respuestaNombre = document.getElementById("respuestaNombre");

function contratar() {
  var flag = false;

  /*Nombre*/
  var nombre = document.getElementById("nombre").value.toLowerCase();
  respuestaNombre = document.getElementById("respuestaNombre");
  if (nombre.trim() == "") {
    respuestaNombre.innerHTML = "Introduzca un nombre";
    flag = true;
  } else {
    respuestaNombre.innerHTML = "";
  }

  /*DNI*/
  var dni = document.getElementById("dni").value.toLowerCase();
  var respuestaDNI = document.getElementById("respuestaDNI");
  if (dni.trim() == "") {
    respuestaDNI.innerHTML = "Introduzca su DNI/NIE";
    flag = true;
  } else {
    respuestaDNI.innerHTML = "";
  }

  /* EDAD*/
  var respuestaANIO = document.getElementById("respuestaANIO");
  var anionacer = document.getElementById("anionacer");
  var aniNacimiento = Number(anionacer.value);
  var hoy = new Date();
  var anioActual = hoy.getFullYear();
  console.log(anioActual);
  console.log(aniNacimiento);

  if ((aniNacimiento + 18) > anioActual) {
    respuestaANIO.innerHTML = "";
    alert("Usted es menor de edad, lo sentimos no puede optar al curso.");
    flag = true;
  } else if (aniNacimiento == 0) {
    respuestaANIO.innerHTML = "Introduzca su Año nacimiento";
    flag = true;
  } else {
    respuestaANIO.innerHTML = "";
  }

  /*Número de teléfono*/
  var respuestaTELEFONO = document.getElementById("respuestaTELEFONO");
  var numeroTelefono = document.getElementById("telefono").value;
  if (numeroTelefono.trim() == "") {
    respuestaTELEFONO.innerHTML = "Introduzca su nº de teléfono";
    flag = true;
  } else {
    respuestaTELEFONO.innerHTML = "";
  }

  /*EMAIL*/
  var respuestaEMAIL = document.getElementById("respuestaEMAIL");
  var email = document.getElementById("email").value;
  if (email.trim() == "") {
    respuestaEMAIL.innerHTML = "Introduzca su Email";
    flag = true;
  } else {
    respuestaEMAIL.innerHTML = "";
  }

  /*PREFERENCIAS DE CONTACTO*/
  var respuestaPREFERENCIAS = document.getElementById("respuestaPREFERENCIAS");
  var telefono = document.getElementById("telefone").checked;
  var email1 = document.getElementById("email1").checked;
  var correopostal = document.getElementById("correo").checked;
  if ((telefono == false) && (email1 == false) && (correopostal == false)) {
    respuestaPREFERENCIAS.innerHTML = "Escoja una preferencia de contacto.";
    flag = true;
  } else {
    respuestaPREFERENCIAS.innerHTML = "";
  }


  /*MARCA*/
  var respuesta = document.getElementById("respuesta");
  if (flag == false) {
    respuesta.innerHTML = "";
    cursos();
  } else {
    respuesta.innerHTML = "Por favor rellene correctamente el formulario.";
  }
}


function cursos() {

  /*ELECCIÓN DE CURSOS*/
  var html5 = document.getElementById("html5").checked;
  var css3 = document.getElementById("css3").checked;
  var java = document.getElementById("java").checked;
  var avanzajava = document.getElementById("avanzajava").checked;
  var bootstrap = document.getElementById("bootstrap").checked;
  var jquery = document.getElementById("jquery").checked;
  var angunlar = document.getElementById("angular").checked;
  var precio = 0;
  var marca = false;
  var respuesta2 = document.getElementById("respuesta2");
  var respuesta3 = document.getElementById("respuesta3");
  respuestaNombre = document.getElementById("respuestaNombre");
  var nombre = document.getElementById("nombre").value.toLowerCase();


  if (html5 == true) {
    precio = precio + 300;
    marca = true;
  }
  if (css3 == true) {
    precio = precio + 200;
    marca = true;
  }
  if (java == true) {
    precio = precio + 500;
    marca = true;
  }
  if (avanzajava == true) {
    precio = precio + 400;
    marca = true;
  }
  if (bootstrap == true) {
    precio = precio + 200;
    marca = true;
  }
  if (jquery == true) {
    precio = precio + 300;
    marca = true;
  }
  if (angunlar == true) {
    precio = precio + 800;
    marca = true;
  }

  if (marca == false) {
    respuesta2.innerHTML = "Por favor escoja al menos un curso";
  } else {
    respuesta3.innerHTML = "El usuario: " + nombre + " ha contratado el curso por valor = " + precio + "€";
    console.log(precio);
  }
}









