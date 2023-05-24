const { Router } = require("express");
const handlerGetComentarios = require("../handlers/handlerGetComentarios");
const handlerPostComentarios = require("../handlers/handlerPostComentarios");
const routeComentario = Router();

routeComentario.get("/", handlerGetComentarios);
routeComentario.post("/", handlerPostComentarios);

module.exports = routeComentario;


