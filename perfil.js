const name = prompt("Nombre: ");
const edad = prompt("Edad: ");
const peliculasFavoritas = [];
while (true) {
  const pelicula = prompt("Película favorita (escribe end cuando hayas terminado): ");
  if (pelicula === "end") {
    break;
  }
  peliculasFavoritas.push(pelicula);
}
console.log(`Nombre: ${name}`);
console.log(`Edad: ${edad}`);
console.log("Películas favoritas:");
peliculasFavoritas.forEach((pelicula) => {
  console.log(`- La película " ${pelicula} " es una de mis favoritas.`);
});
