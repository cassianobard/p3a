var express = require('express');
var router = express.Router();
var fornecedores = require('../models/fornecedor');

router.get('/', function (req, res) {
  fornecedores.getAll(function (error, rows) {
    if (error) { res.json(error) } else { res.json(rows) }
  })
})

router.get('/:nome', function (req, res) {
  fornecedores.getByName(req.params.nome, function (error, rows) {
    if (error) { res.json(error) } else { res.json(rows) }
  })
})

router.put('/', function (req, res) {
  fornecedores.add(req.body, function (error, rows) {
    if (error) { res.json(error) } else { res.json(rows) }
  })
})

router.put('/:nome', function (req, res) {
  fornecedores.update(req.params.nome, req.body, function (error, rows) {
    if (error) { res.json(error) } else { res.json(rows) }
  })
})

router.delete('/:nome', function (req, res) {
  fornecedores.delete(req.params.nome, function (error, rows) {
    if (error) { res.json(error) } else { res.json(rows) }
  })
})

router.post('/', function (req, res) {
  fornecedores.count(function (error, count) {
    if (error) { res.json(error) } else { res.json(rows) }
  })
})

module.exports = router;