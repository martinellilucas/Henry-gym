const { Router } = require("express");
const handlerGetClientes = require("../handlers/handlerGetClientes");
const handlerPostCliente = require("../handlers/handlerPostCliente");
const handlerPutCliente = require("../handlers/handlerPutCliente");
const handlerClienteByEmail = require("../handlers/handlerClienteByEmail");
const routeCliente = Router();

routeCliente.get("/", handlerGetClientes);
routeCliente.get("/:id", handlerClienteByEmail);
routeCliente.post("/", handlerPostCliente);
routeCliente.put("/:email", handlerPutCliente);


module.exports = routeCliente;
