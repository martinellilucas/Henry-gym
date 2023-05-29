const { Router } = require("express");
const handlerGetClase = require("../handlers/handlerGetClases");
const handlerPostClase = require("../handlers/handlerPostClase");
const handlerDeleteClase = require("../handlers/handlerDeleteClase");
const routeClase = Router();

routeClase.get("/", handlerGetClase);
routeClase.post("/", handlerPostClase);
routeClase.delete('/', handlerDeleteClase);

module.exports = routeClase;