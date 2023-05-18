const { Router } = require("express");
const handlerGetClase = require("../handlers/handlerGetClases");
const routeClase = Router();

routeClase.get("/", handlerGetClase);

module.exports = routeClase;