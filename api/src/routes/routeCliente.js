const { Router } = require("express");
const handlerGetClientes = require("../handlers/handlerGetClientes");
const handlerPostCliente = require("../handlers/handlerPostCliente");
const handlerPutCliente = require("../handlers/handlerPutCliente");
const routeCliente = Router();

routeCliente.get("/", handlerGetClientes);
routeCliente.post("/", handlerPostCliente);
routeCliente.put("/:email", handlerPutCliente);

module.exports = routeCliente;
