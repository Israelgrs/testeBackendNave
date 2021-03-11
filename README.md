<h1 text align="center"> Olá, Nave.rs :rocket: </h1>

<h2 text align="center">Neste repositório se encontra o <a href="https://github.com/naveteam/teste-estagio-2020">desafio</a> proposto pela Nave.rs para vaga de estágio backend</h2>

<p align ="center">Para começar, no primeiro link, se encontram as resoluções dos exercícios de lógica(exercícios de 1 a 10)
Clicando <a href= "https://codesandbox.io/s/teste-estagioisrael-p616h">aqui</a>, se pode acessar requisições solicitadas, realizadas no template fornecido no desafio.</p>

<h1 align ="center">DESAFIO BACKEND :computer: </h1>
<p>Assim como o solicitado, a ideia do projeto é uma API com os dados dos navers, como nome, cargo, data de admissão, data de nascimento e os projetos em que o naver está envolvido.
A ideia inicial é apenas a de listar e poder inserir novos navers e também projetos, sem rota DELETE inclusa.</p>


<h3>Dificuldades</h3>
<p>Infelizmente o projeto não se concluiu por completo, devido alguns problemas para conectar ao banco de dados mysql, tal como demonstrado no gif abaixo de um dos testes.</p>

<h3>Dificuldades</h3>
<p>Infelizmente o projeto não se concluiu por completo, devido alguns problemas para conectar ao banco de dados mysql, tal como demonstrado no gif abaixo de um dos testes.</p>
<img src="https://user-images.githubusercontent.com/43561785/110713709-20a15200-81e1-11eb-9057-89198da60667.gif">
<p>Para tentar solucionar o problema, tentei utilizar duas formas diferentes de conectar ao banco, uma delas com o seguinte código:</p>
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: 'Transformice231', // A senha do usuário. Ex: user123
    port:'3306',
    database: 'naver' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})

<h4>O qual retornou o seguinte erro:</h4>
<img src="https://user-images.githubusercontent.com/43561785/110714410-1469c480-81e2-11eb-92ae-0034cd9fe0ac.png">
<p>A outra forma foi tentando utilizar um código bem diferente para realizar a conexão, instanciando uma pool, da seguinte forma:</p>
const mysql = require('mysql');

var pool = mysql.createPool({
    "user": "root",
    "password": "Transformice231",
    "database": "naver",
    "host": "localhost",
    "port": 3306
});

exports.pool = pool;
<p>O qual resultou no erro mostrado no primeiro gif, que aparentemente estabeleceu uma conexão, porém não estava sendo capaz de armazenar os dados no banco e nem de exibir os que já haviam sido inseridos no banco diretamente pelo terminal.Infelizmente isso impediu a aplicação de ser concluída. 😞</p>
<h4>Todos os códigos da aplicação seguem nas pastas do repositório.</h4>
<ul>
    <li>Banco de dados utilizado: MySQL</li>
    <li>Bibliotecas utilizadas: Express, Nodemon</li>
    <li>Framework: NodeJs</li>
</ul>
