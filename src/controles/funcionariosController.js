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

    const Nome = req.params.Nome;
    // console.log(Nome)


    const nomeFun = funcionarios.filter( T => T.Nome == Nome);
            res.status(200).send(nomeFun); 
  
    }

    // //Buscar Tarefas por Data de Inclusão e apresentar da mais nova para mais antiga
    
    exports.getBydataInclusao = (req,res) => {

        funcionarios.sort(function (a, b){
            return new Date(a.dataInclusao) - new Date(b.dataInclusao);
        });
        // console.log(funcionarios)
        res.status(200).send(funcionarios)
    
    }

    //Calcular diferença entre data de início e data de conclusão e adicionar nova chave aos objetos
    exports.getBydiferencaData = (req,res) => {
        
    const datas = funcionarios.map(item => new Date (funcionarios.dataInclusao), new Date(funcionarios.dataConclusao))
    console.log (datas)
    }
