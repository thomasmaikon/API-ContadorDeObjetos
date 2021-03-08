const express = require('express');
const bodyParser = require('body-parser');

const aplicacao = express();
const rotas = express.Router();

// pegando metodos de cada rota
const raiz = require('./rotas/index')
const dados = require('./rotas/dados')
const wifi = require('./rotas/wifi')

aplicacao.use(bodyParser.json())// transforma o que recebe para tipo JSON
aplicacao.use(bodyParser.urlencoded({ extended: false }));

aplicacao.use('/',raiz);
aplicacao.use('/dadosCamera',dados);
aplicacao.use('/dadosWifi',wifi)

module.exports = aplicacao;
