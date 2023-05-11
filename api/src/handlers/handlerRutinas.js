const handlerRutinas = (req, res) => {
  try {
    res.status(200).send("Esta es la ruta de las rutinas");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerRutinas;
