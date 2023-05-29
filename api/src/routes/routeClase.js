const { Router } = require("express");
const handlerGetClase = require("../handlers/handlerGetClases");
const handlerPostClase = require("../handlers/handlerPostClase");
const handlerGetClaseByName = require("../handlers/handlerGetClaseByName");
const routeClase = Router();

routeClase.get("/", handlerGetClase);
routeClase.post("/", handlerPostClase);
routeClase.get("/:name", handlerGetClaseByName);

module.exports = routeClase;
