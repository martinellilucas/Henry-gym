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

export const calculo = (clientes, membresia) => {
  return clientes.filter((cliente) => cliente.tipoDeSuscripcion === membresia)
    .length;
};
