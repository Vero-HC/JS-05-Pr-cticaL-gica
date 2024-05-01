let frase = prompt(" Frase o palabra:");
let fraseSinEspacios = frase.replace(/\s/g,"");
let fraseInver = fraseSinEspacios.split("").reverse().join("");

if (fraseSinEspacios === fraseInver) {
  console.log(" ~ " + frase + " ~ " + " es un palíndromo.");
} else {
  console.log(" ~ " + frase + " ~ " + " no es un palíndromo.");
}
