let seg = prompt("Temporizador (ingresa los segundos)");
let mensaje = prompt("Nombre de alarma");

setTimeout(() => {
  console.log(mensaje);
}, seg * 1000);
