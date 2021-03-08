const express = require('express');
const rotas = express.Router();

const dadosController = require('../controllers/wifi-controller')

rotas.get('/',dadosController.get);

rotas.post('/',dadosController.post);

rotas.put('/:id',dadosController.put);

rotas.delete('/',dadosController.delete);

module.exports = rotas;
