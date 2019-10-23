// arquivo controler
const funcionarios = require('../model/listaFuncionarios.json')

// esta pegando a lista de todos os funcionarios
exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(funcionarios)
}

exports.getById = (req, res) => {
    const id = req.params.id
    // console.log(id)
    const funcId = funcionarios.filter(item => item.id == id)
    res.status(200).send(funcId)
}

exports.getByCheck = (req,res) => {
    const id = req.params.id
    const tarefa = funcionarios.find(item => item.id == id )

    if (!tarefa){
        res.send('não concluiu')
    }
    const tarefaConcluida= tarefa.tarefaConcluida
    const tarefaTarefa = tarefaConcluida.filter(item => item.ok == true)
    
    res.status(200).send(tarefaTarefa)
}