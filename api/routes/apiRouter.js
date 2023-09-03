const express = require('express')
let apiRouter = express.Router()

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

apiRouter.get(endpoint + 'produtos', function (req, res){
    res.status(200).json (lista_produtos)
})

apiRouter.get(endpoint + 'produtos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const idx = lista_produtos.produtos.findIndex(p => p.id === id)
    res.status(200).json(lista_produtos.produtos[idx])  
})

apiRouter.post(endpoint + 'produtos/', (req, res) => {
    const ultimo = lista_produtos.produtos.length
    req.body.id = ultimo + 1
    lista_produtos.produtos.push(req.body)
    res.status(200).json (lista_produtos)    
    //res.status(200).send({ status: 'Produto cadastrado!' })
})


apiRouter.put(endpoint + 'produtos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const idx = lista_produtos.produtos.findIndex(p => p.id === id)
    lista_produtos.produtos[idx] = req.body
    res.status(200).json(lista_produtos.produtos[idx])     
    //res.status(200).send({ status: 'Produto atualizado com sucesso!' }) 
})

apiRouter.delete(endpoint + 'produtos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const idx = lista_produtos.produtos.findIndex(p => p.id === id)
    lista_produtos.produtos.splice(idx, 1)
    res.status(200).json(lista_produtos)    
    //res.status(200).send({ status: 'Produto deletado!' })
})

module.exports = apiRouter;