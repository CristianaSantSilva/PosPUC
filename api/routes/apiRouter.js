const express = require('express')
let apiRouter = express.Router()
//const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])
const knex = require('knex')
// const knex = require('knex')({
//     client: 'sqlite3',
//     debug: true,
//     connection: {
//         connectionString : process.env.DATABASE_URL,
//         ssl: { rejectUnauthorized: false },
//     }
// });

apiRouter.use (express.json())
const endpoint = '/'

const lista_produtos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]
}

//Retorna um json com todos os cursos cadastrados
apiRouter.get(endpoint + 'cursos', (req, res) => {
        knex('cursos').then(cursos => { 
            res.status(200).json(cursos)
        })
        .catch(err => {
            res.status(500).json({
            message: 'Erro ao recuperar produtos: ${err.message}'
        })
    })
})

//Retorna um json do curso solicitado pelo id
apiRouter.get(endpoint + 'cursos/:id', (req, res) => {
    knex.select('*').from('cursos').where({ id: parseInt(req.params.id) })
    .then( cursos => res.status(200).json(cursos) )
    .catch(err => {
        res.status(500).json({
        message: 'Erro ao recuperar o curso solicitado - ' + err.message })
    })
})

//Insere um curso de acordo com o json passado
apiRouter.post(endpoint + 'cursos/', (req, res) => {
    knex('cursos').insert(req.body)
    .then( cursos => res.status(200).json(cursos) )
    .catch(err => {
        res.status(500).json({
        message: 'Erro ao inserir o curso - ' + err.message })
    })
})

//Atualiza os dados de um curso de acordo com json e id passados
apiRouter.put(endpoint + 'cursos/:id', (req, res) => {
    const idx = parseInt(req.params.id)

    knex('cursos')
    .update({
        nome: req.body.nome,
        tipo: req.body.tipo,
        valor: req.body.valor
    })
    .where('id', '=', idx)
    .then( cursos => res.status(200).json(cursos) )
    .catch(err => {
        res.status(500).json({
        message: 'Erro ao atualizar o curso - ' + err.message })
    })
})

//Deleta um curso de acordo com id do curso passado
apiRouter.delete(endpoint + 'cursos/:id', (req, res) => {
    knex('cursos').del().where({id: req.params.id})
    .then( cursos => res.status(200).json(cursos) )
    .catch(err => {
        res.status(500).json({
        message: 'Erro ao excluir o curso - ' + err.message })
    })
})

module.exports = apiRouter;