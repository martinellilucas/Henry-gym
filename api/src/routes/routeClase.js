const { Router } = require("express");
const handlerGetClase = require("../handlers/handlerGetClases");
const handlerPostClase = require("../handlers/handlerPostClase");
const handlerDeleteClase = require("../handlers/handlerDeleteClase");
const handlerGetClaseByName = require("../handlers/handlerGetClaseByName");

const routeClase = Router();

routeClase.get("/", handlerGetClase);
routeClase.post("/", handlerPostClase);
routeClase.delete("/:id", handlerDeleteClase);
routeClase.get("/:name", handlerGetClaseByName);

module.exports = routeClase;
