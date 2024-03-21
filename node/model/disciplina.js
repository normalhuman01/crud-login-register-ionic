var mongoose = require('mongoose')
var disciplinaSchema = new mongoose.Schema(
    {
        nome:String,
        data: String
    }
);

module.exports = mongoose.model('Disciplina', disciplinaSchema);

