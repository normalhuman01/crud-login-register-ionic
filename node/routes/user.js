var express = require('express')
var router = express.Router();
var user = require('../model/user')

router.post('/', function (req, res, next) {
   
    user.create(req.body, function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
    
  })

router.get('/', function (req, res, next) {
    user.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.get('/:id', function (req, res, next) {
    user.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.put('/:id', function (req, res, next) {
    user.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

router.delete('/:id', function (req, res, next) {
    user.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

// exportando router
module.exports = router;
