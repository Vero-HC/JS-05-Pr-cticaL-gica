let numMayor = 0;
console.log("Ingresa 10 números");
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Ingrese un número:"));
  if (num > numMayor) {
    numMayor = num;
  }
}
console.log("El número mayor es:", numMayor);