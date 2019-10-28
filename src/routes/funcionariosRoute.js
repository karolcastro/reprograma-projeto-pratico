// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controles/funcionariosController')// esta importando do controler

// rotas para o acesso // a ordem das rotas interfere
router.get('/', controller.get)
router.get('/tarefaConcluida',controller.getByCheck)
router.get('/nomeColaborador', controller.getByNome)
router.get('/dataInclusao', controller.getBydataInclusao)
router.get('/diferencaData', controller.getBydiferencaData)
router.get('/:id', controller.getById)

module.exports = router