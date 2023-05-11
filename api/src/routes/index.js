const { Router } = require("express");
const routeEjercicios = require("./routeEjercicios");
const routeRutinas = require("./routeRutinas");
const router = Router();

router.use("/ejercicios", routeEjercicios);
router.use("/rutinas", routeRutinas);

module.exports = router;
