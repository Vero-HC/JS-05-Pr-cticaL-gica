var num = prompt("Ingrese un número:");

var factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}

alert(`El factorial de ${num} es: ${factorial}`);
