var mongoose = require('mongoose')
var cursoSchema = new mongoose.Schema(
    {
        nome:String,
        data: String,
        perido:String
    }
);

module.exports = mongoose.model('Curso', cursoSchema);

