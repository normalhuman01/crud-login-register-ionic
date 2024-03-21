var express = require('express')
var router = express.Router();
var Aluno = require('../model/Aluno')

router.post('/', function (req, res, next) {
    Aluno.create(req.body, function (err, post){
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
   // res.send('Rota de aluno com método post funcionou')
  })

router.get('/', function (req, res, next) {
    Aluno.find(function (err, post){
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})

router.get('/:id', function (req, res, next) {
    Aluno.findById(req.params.id, function (err, post){
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})


router.put('/:id', function (req, res, next) {
    Aluno.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

router.delete('/:id', function (req, res, next) {
    Aluno.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

// exportando router
module.exports = router;
