export const calculoMembresias = (clientes, membresia) => {
  if (!clientes.length) {
    return 0;
  } else {
    const total = clientes.length;
    const porcion = clientes.filter(
      (cliente) => cliente.tipoDeSuscripcion === membresia
    );
    return (porcion.length * 100) / total;
  }
};
