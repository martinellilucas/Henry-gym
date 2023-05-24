const { Router } = require("express");
const handlerGetClase = require("../handlers/handlerGetClases");
const handlerPostClase = require("../handlers/handlerPostClase");
const routeClase = Router();

routeClase.get("/", handlerGetClase);
routeClase.post("/", handlerPostClase);

module.exports = routeClase;