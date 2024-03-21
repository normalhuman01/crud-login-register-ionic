var express = require('express')
var router = express.Router();
var curso = require('../model/curso')

router.post('/', function (req, res, next) {
   
    curso.create(req.body, function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
    
  })

router.get('/', function (req, res, next) {
    curso.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.get('/:id', function (req, res, next) {
    curso.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.put('/:id', function (req, res, next) {
    curso.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

router.delete('/:id', function (req, res, next) {
    curso.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

// exportando router
module.exports = router;
