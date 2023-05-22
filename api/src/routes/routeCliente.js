const { Router } = require("express");
const handlerGetClientes = require("../handlers/handlerGetClientes");
const handlerPostCliente = require("../handlers/handlerPostCliente");
const handlerPutCliente = require("../handlers/handlerPutCliente");
const handlerIDCliente = require("../handlers/handlerIDCliente");
const routeCliente = Router();

routeCliente.get("/", handlerGetClientes);
routeCliente.get("/:id", handlerIDCliente);
routeCliente.post("/", handlerPostCliente);

routeCliente.put("/:email", handlerPutCliente);

module.exports = routeCliente;
