//Ejercicio práctico
//Tienen una función que recibe un objeto como parámetro. La función debe retornar un
//array con el nombre de las propiedades que su tipo sea boolean.

//Por ejemplo, para el objeto { a: true, b: 42, c: false }
//la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.

const odjeto = { a: true, b: 42, c: false };

function array(odjeto) {
  const pepe = [];
  for (const property in odjeto) {
    if (odjeto[property] === true || odjeto[property] === false) {
      pepe.push(property);
    }
    console.log(`${property}: ${odjeto[property]}`);
  }
  return pepe;
}
console.log(array(odjeto));
