const { Router } = require("express");
const routeEjercicios = require("./routeEjercicios");
const routeRutinas = require("./routeRutinas");
const routeClase = require("./routeClase");
const routeComentario = require('./routeComentario');
const routeCliente = require("./routeCliente");

const router = Router();

router.use("/ejercicios", routeEjercicios);
router.use("/rutinas", routeRutinas);
router.use("/clase", routeClase);
router.use("/cliente", routeCliente);
router.use("/comentarios", routeComentario)


module.exports = router;
