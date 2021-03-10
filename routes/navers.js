const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//retorna todos os navers
router.get('/', (req, res, next) =>{
    //res.status(200).send({
     //   mensagem : 'Rota para lista de Navers'
   // });
    mysql.getConnection((error, conn) =>{
        if (error) {return res.status(500).send({error: error}) }
        con.connect(
            'SELECT * FROM navers;',
            (error, resultado, fields) =>{
                if (error) {return res.status(500).send({error: error}) }
                return res.status(200).send({response: resultado})
            }
        )
    })

});
// insere um naver
router.post('/', (req, res, next)=>{
         mysql.getConnection((error, conn) =>{
          if (error) {return res.status(500).send({error: error}) }
            conn.query(
                'INSERT INTO navers (nome, dtnascimento, dtadmissao, cargo) VALUES (?, ?, ?, ?);'
                [req.body.nome, req.body.dtnascimento, req.body.dtadmissao, req.body.cargo],
                (error, resultado, field) =>{
                    conn.release();
                    if (error) {return res.status(500).send({error: error}) }
                res.status(201).send({
                    mensagem: 'Naver inserido com sucesso',
                    id_naver: resultado.insertID
                })
                }
                )
        })

})
// retorna os dados de um naver
router.get('/:id_naver', (req, res, next) =>{
    const id = req.params.id_naver
    res.status(200).send({
        mensagem: 'Usando o GET de um naver especifico',
        id_naver: id
    })
})
//Edita os dados de um naver
router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de navers'
    })
})



module.exports = router;