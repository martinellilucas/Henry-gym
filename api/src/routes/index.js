const { Router } = require("express");
const routeEjercicios = require("./routeEjercicios");
const routeRutinas = require("./routeRutinas");
const routeSuscripcion = require("./routeSuscripcion");
const routeClase = require("./routeClase");
const routeEntrenador = require("./routeEntrenador");
const router = Router();

router.use("/ejercicios", routeEjercicios);
router.use("/rutinas", routeRutinas);
router.use("/suscripcion", routeSuscripcion)
router.use("/clase", routeClase);
router.use("/entrenador", routeEntrenador)


module.exports = router;
