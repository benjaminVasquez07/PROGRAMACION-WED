const array = ["carpa", " tormenta", "casa"];
const sinA = ["pepe", "carlos", "juan"];

function terminanEnA(words) {
  // código
  const terminanEnA = words.every((word) => word.endsWith("a"));
  return terminanEnA;
}

console.log(terminanEnA(sinA));
