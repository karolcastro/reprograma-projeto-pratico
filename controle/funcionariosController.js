// arquivo controler
const funcionarios = require('..')
// esta pegando a lista de todos os funcionarios
exports.get = (req, res) => {
    const func = funcionarios.map(item => {
        item.descricao = "***********"
        // delete item.cpf // pode substituir ou deletar
        return item
    })
    
    // console.log(req.url)
    res.status(200).send(prof)
}

exports.getById = (req,res) => {
    const id = req.params.id
    const func = funcionarios.find(item => item.id == id) // escolheu a aluna

    delete func.descricao
    // const cpfCpf = professoras.map(item => {
    //     item.cpf = "***********"// outra opcao
    // //    delete item.cpf // pode ser uma outra opcao
    //     return item
    // })
    res.status(200).send(funcionarios)
}