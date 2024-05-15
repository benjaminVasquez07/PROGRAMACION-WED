const numeros = [1, 2, 3, 4, 5, 6];
let total = 0;
let contador = 0;
function sumarPares(numeros) {
  while (contador < numeros.length) {
    if (numeros[contador] % 2 === 0) {
      total = total + numeros[contador];
    }
    contador++;
  }
  return total;
}
console.log(sumarPares(numeros));
