const { Router } = require("express");
const handlerRutinas = require("../handlers/handlerRutinas");
const handlerPostRutinas = require("../handlers/handlePostRutinas")
const routeRutinas = Router();

routeRutinas.get("/", handlerRutinas);
routeRutinas.post("/", handlerPostRutinas)

module.exports = routeRutinas;
