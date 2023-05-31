const { Router } = require("express");

const handlerPostClaseXCliente = require("../handlers/handlerPostClaseXCiente");
const handlerGetClaseXCliente = require("../handlers/handlerGetClaseXCliente");
const handlerDeleteClasexCliente = require("../handlers/handlerDeleteClasexCliente");

const routeClaseXCliente = Router();

routeClaseXCliente.post("/", handlerPostClaseXCliente);
routeClaseXCliente.get("/:id", handlerGetClaseXCliente);
routeClaseXCliente.delete("/:id/:claseid", handlerDeleteClasexCliente);

module.exports = routeClaseXCliente;
