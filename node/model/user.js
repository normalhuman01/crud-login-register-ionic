var mongoose = require('mongoose')
var userSchema = new mongoose.Schema(
    {
        nome:String,
        data: String,
        usuario:String,
        senha: String
    }
);

module.exports = mongoose.model('User', userSchema);

