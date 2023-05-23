export const calculoMembresias = (clientes, membresia) => {
  const total = clientes.length;
  const porcion = clientes.filter(
    (cliente) => cliente.tipoDeSuscripcion === membresia
  );
  return (porcion.length * 100) / total;
};
