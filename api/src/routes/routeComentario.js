const { Router } = require("express");
const handlerGetComentarios = require("../handlers/handlerGetComentarios");
const handlerPostComentarios = require("../handlers/handlerPostComentarios");
const handlerPutComentario = require("../handlers/handlerPutComentario");
const handlerGetComentarioByName = require("../handlers/handlerGetComentarioByName");
const routeComentario = Router();

routeComentario.get("/", handlerGetComentarios);
routeComentario.post("/", handlerPostComentarios);
routeComentario.put("/:id", handlerPutComentario);
routeComentario.get("/:name", handlerGetComentarioByName);

module.exports = routeComentario;
