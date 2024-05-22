// declaramos un objeto
const persona = {
  name: "Benjamin",
  lastName: "Vasquez",
  isWorking: true,
  age: 17,
  cat: ["zoe", "felipe", "collar"],
  walk: () => {
    return "hola estoy caminando";
  },
};

console.log(persona.age); //accedemos a la propiedad
console.log(persona["name"]); //accedemos a la propiedad
persona.pepito = "pepito"; //agrgamos una nueva propiedad
delete persona.age; //borra la propiedad deseada

console.log(persona);
