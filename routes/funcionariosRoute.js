// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controle/funcionariosController')// esta importando do controler

// rotas para o acesso // a ordem das rotas interfere
router.get('/', controller.get)
router.get('/:id', controller.getById)

module.exports = router