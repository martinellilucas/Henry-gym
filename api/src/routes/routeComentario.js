const { Router } = require("express");
const handlerGetComentarios = require("../handlers/handlerGetComentarios")
const routeComentario = Router();

routeComentario.get("/", handlerGetComentarios);

module.exports = routeComentario;