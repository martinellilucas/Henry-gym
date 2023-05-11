const { Router } = require("express");
const handlerEjercicios = require("../handlers/handlerEjercicios");
const handlerIdEjercicios = require("../handlers/handlerIdEjercicios");

const routeEjercicios = Router();

routeEjercicios.get("/", handlerEjercicios);
routeEjercicios.get("/:id", handlerIdEjercicios);

module.exports = routeEjercicios;
