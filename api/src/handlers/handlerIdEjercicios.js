const { Router } = require("express");

const handlerIdEjercicios = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(`Este es el detail del id ${id}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerIdEjercicios;
