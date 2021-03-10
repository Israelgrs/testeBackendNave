const express = require('express');
const router = express.Router();
//retorna todos os projeto
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem : 'Rota para ver a lista de projetos'
    });
});
// insere um projeto
router.post('/', (req, res, next)=>{
    const projeto = {
        id_naver: req.body.id_naver,
        nome: req.body.nome
    }
    
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de projetos'
    })
})
// retorna os dados de um projeto
router.get('/:id_projeto', (req, res, next) =>{
    const id = req.params.id_projeto
    res.status(200).send({
        mensagem: 'Usando o GET de um projeto especifico',
        id_projeto: id
    })
})
//Edita os dados de um projeto
router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de projetos'
    })
})



module.exports = router;