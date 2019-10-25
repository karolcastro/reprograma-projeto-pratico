// arquivo controler
const funcionarios = require('../model/listaFuncionarios.json')

// esta pegando a lista de todos os funcionarios
exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(funcionarios)
}
//Retornar somente a tarefa encontrada por id.
exports.getById = (req, res) => {
    const id = req.params.id
    // console.log(id)
    const funcId = funcionarios.filter(item => item.id == id)
    res.status(200).send(funcId)
}

//Mostrar somente itens concluídos.
exports.getByCheck = (req,res) => {

    const concluidas = funcionarios.filter(T => T.tarefaConcluida == "true");
    console.log (concluidas);

    const descricaoTarefa = concluidas.map(T => T);
  
    res.status(200).send(descricaoTarefa)
}

//Buscar tarefas somente de um determinado colaborador:
exports.getByNome = (req,res) => {

    const Nome = req.params.Nome();
    console.log(Nome);

    const nomeFun = funcionarios.filter( T => T.nomeColaborador == " ");

    if (nomeFun.length == 0){
        res.status(404).send(`nao encontrado ${Nome}`);
        
         } else{
            res.status(200).send(nomeFun); 
        }
    }