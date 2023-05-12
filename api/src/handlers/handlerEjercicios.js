const handlerEjercicios = (req, res) => {
  try {
    res.status(200).send("Esta es la ruta de los ejercicios");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerEjercicios;
