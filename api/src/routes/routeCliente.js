const { Router } = require("express");
const handlerGetClientes = require("../handlers/handlerGetClientes");
const handlerPostCliente = require("../handlers/handlerPostCliente");
const routeCliente = Router();

routeCliente.get("/", handlerGetClientes);
routeCliente.post("/", handlerPostCliente);


module.exports = routeCliente;