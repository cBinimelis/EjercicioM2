$("#contactForm").on("submit", function (event) {
  let nombre = $("#name").val();
  let correo = $("#mail").val();
  let mensaje = $("#message").val();

  $("#nameR").append(nombre);
  $("#mailR").append(correo);
  $("#messageR").append(mensaje);

  $("#name").val("");
  $("#mail").val("");
  $("#message").val("");
  event.preventDefault();

  Swal.fire({
    title: "Mensaje enviado",
    text: "Podrás ver un resumen de tu solicitud",
    icon: "success",
  });
});
