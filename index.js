// importar o express

const express = require('express')
const router = express.Router() // importar o router que decide para onde vai

// http://e-commerce.com - este é um index

// 
router.get('/', function(req, res){
    res.status(200).send({
        title: 'Exercicio pratico ',
        version: '0.0.1'
    })
})

module.exports = router