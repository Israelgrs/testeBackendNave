const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const rotaNavers = require('./routes/navers');
const rotaProjetos = require('./routes/projetos')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json()); 

app.use('/navers', rotaNavers);
app.use('/projetos', rotaProjetos)

app.use((req, res, next)=>{
    const erro = new Error('Não encontrado')
    erro.status= 404;
    next(erro);
});

app.use((error, req, res, next)=>{
    res.status(error,status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;