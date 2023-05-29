const { Router } = require("express");
const routeEjercicios = require("./routeEjercicios");
const routeRutinas = require("./routeRutinas");
const routeClase = require("./routeClase");
const routeComentario = require('./routeComentario');
const routeCliente = require("./routeCliente");
const routeClaseXCliente = require("./routeClaseXCliente")

const router = Router();

router.use("/ejercicios", routeEjercicios);
router.use("/rutinas", routeRutinas);
router.use("/clase", routeClase);
router.use("/cliente", routeCliente);
router.use("/comentarios", routeComentario)
router.use("/clasexcliente", routeClaseXCliente)


module.exports = router;
