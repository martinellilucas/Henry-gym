const { Router } = require("express");

const handlerPostClaseXCliente = require("../handlers/handlerPostClaseXCiente");
const handlerGetClaseXCliente = require("../handlers/handlerGetClaseXCliente");

const routeClaseXCliente = Router();


routeClaseXCliente.post("/", handlerPostClaseXCliente);
routeClaseXCliente.get("/:id", handlerGetClaseXCliente);


module.exports = routeClaseXCliente;