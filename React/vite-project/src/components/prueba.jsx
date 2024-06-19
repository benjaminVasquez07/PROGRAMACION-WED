export function Prueba({ nombre, Apellido }) {
  const products = [
    { title: "Col", id: 1, description: "parece una lechuga" },
    { title: "Ajo", id: 2, description: "es un condimento" },
    { title: "Manzana", id: 3, description: "es una fruta muy rica" },
  ];

  return (
    <>
      <h1>
        Prueba{nombre} {Apellido}
      </h1>

      {products.map((producto, i) => {
        return (
          <div key={producto.id}>
            <h2>title: {producto.title}</h2>
            <p>{producto.description}</p>
          </div>
        );
      })}
    </>
  );
}
