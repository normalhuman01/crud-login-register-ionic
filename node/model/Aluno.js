var mongoose = require('mongoose')
var AlunoSchema = new mongoose.Schema(
    {
        ra: String,
        nome:String,
        endereco:String,
        rg: String
    }
);

module.exports = mongoose.model('Aluno', AlunoSchema);
