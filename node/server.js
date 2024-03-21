var express = require('express')
var app = express()

// permite requisição de fora
var cors = require('cors')
app.use(cors())

// usa dados do form como JSON
var bodyParser = require('body-parser')
var aux = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());
app.use(aux);

//rotas
var aluno = require('./routes/aluno')
var user = require('./routes/user')
var curso = require('./routes/curso')
var disciplina = require('./routes/disciplina')


app.use('/aluno', aluno)
app.use('/user', user)
app.use('/curso', curso)
app.use('/disciplina', disciplina)
// banco de dados MongoDB
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/academico',
            {
            promiseLibrary: require('bluebird')            
            }
        )
        .then(() => console.log('Conectou com sucesso'))
        .catch((err) => console.error(error));

app.listen(3000)
console.log("Rodando servidor Express")