const { Router } = require("express");
const handlerRutinas = require("../handlers/handlerRutinas");
const routeRutinas = Router();

routeRutinas.get("/", handlerRutinas);

module.exports = routeRutinas;
