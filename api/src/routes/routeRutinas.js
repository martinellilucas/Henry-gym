const { Router } = require("express");
const handlerRutinas = require("../handlers/handlerRutinas");
const handlerPostRutinas = require("../handlers/handlePostRutinas");
const handlerRutinasByID = require("../handlers/handlerRutinaByID");
const routeRutinas = Router();

routeRutinas.get("/", handlerRutinas);
routeRutinas.get("/:id", handlerRutinasByID);
routeRutinas.post("/", handlerPostRutinas);

module.exports = routeRutinas;
