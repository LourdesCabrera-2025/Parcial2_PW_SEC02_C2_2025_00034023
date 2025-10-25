const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentas.controller');


router.get("/", cuentasController.listarCuentas);
router.get("/:id", cuentasController.obtenerCuenta);
router.get("/buscar/query", cuentasController.buscarCuentas);
router.get("/balance/total", cuentasController.obtenerBalanceTotal);

module.exports = router;
r