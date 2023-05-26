const { Router } = require("express");
const handlerGetClase = require("../handlers/handlerGetClases");
const handlerPostClase = require("../handlers/handlerPostClase");
const handlerGetClaseById = require("../handlers/handlerGetClasesById")
const routeClase = Router();

routeClase.get("/", handlerGetClase);
routeClase.post("/", handlerPostClase);
routeClase.get("/:id", handlerGetClaseById);


module.exports = routeClase;