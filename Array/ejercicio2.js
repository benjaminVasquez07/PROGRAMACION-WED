const pedidos = ["Juan", "Hamburguesa", "Papas fritas", "Pizza"];

function procesarPedido(pedidos) {
  // codigo
  const nombreClienete = pedidos.shift();
  pedidos.unshift("bebida");
  pedidos.push(nombreClienete);

  return pedidos;
}

console.log(procesarPedido(pedidos));
