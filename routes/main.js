const express = require('express'); /* trequerimos express */
const router = express.Router(); /* usamo el metodo router de expres para las rutas */
const { about,home } = require('../controllers/mainControllers'); /* traemos las rutas(metodos) de la carpeta controllers */


 /* hacemos  las rutas a las vistas segun que se ponga en el buscador*/
router.get("/",home);
router.get("/about",about);

module.exports = router;