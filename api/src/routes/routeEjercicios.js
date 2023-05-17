const { Router } = require("express");
const handlerEjercicios = require("../handlers/handlerEjercicios");
const handlerIdEjercicios = require("../handlers/handlerIdEjercicios");
const handlerNameEjercicios = require("../handlers/handlerNameEjercicios")

const routeEjercicios = Router();

routeEjercicios.get("/name", handlerNameEjercicios);
routeEjercicios.get("/", handlerEjercicios);
routeEjercicios.get("/:id", handlerIdEjercicios);


module.exports = routeEjercicios;
