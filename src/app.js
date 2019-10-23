// chamar o express 

const express = require('express')
const app =  express()

// criacao das rotas // a rota sera o index
const index = require('./routes/index')
const funcionarios = require('./routes/funcionariosRoute')


app.use( function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    // console.log('Passamos pelo app'), 
    next()
})

app.use('/' , index)// tudo que tiver a / ele vai chamar para o index
app.use('/funcionarios', funcionarios) 
app.use('/tarefaConcluida', tarefaConcluida)


//exportar o modulo// podemos usa -lo em outro lugar
module.exports = app