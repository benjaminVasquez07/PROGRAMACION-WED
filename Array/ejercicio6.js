const words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];

const word = "pepito";

function buscaPalabras(words, word) {
  //codigo
  const indice = words.indexOf(word);
  const palabrasMasLargas = words.filter((word) => {
    return word.length > indice;
  });

  return palabrasMasLargas;
}

console.log(buscaPalabras(words, word));
