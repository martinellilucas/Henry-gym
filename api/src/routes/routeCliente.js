const { Router } = require("express");
const handlerGetClientes = require("../handlers/handlerGetClientes");
const handlerPostCliente = require("../handlers/handlerPostCliente");
const handlerPutCliente = require("../handlers/handlerPutCliente");
const handlerClienteByEmail = require("../handlers/handlerClienteByEmail");
const handlerRemoveClase = require("../handlers/handlerRemoveClase");
const routeCliente = Router();

routeCliente.get("/", handlerGetClientes);
routeCliente.get("/:id", handlerClienteByEmail);
routeCliente.get("/:id/:claseId", handlerRemoveClase);
routeCliente.post("/", handlerPostCliente);
routeCliente.put("/:email", handlerPutCliente);

module.exports = routeCliente;
