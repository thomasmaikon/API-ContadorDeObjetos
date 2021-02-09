const express = require('express');
const rotas = express.Router();

rotas.get('/',(requesicao, resposta,proximo)=>{
	resposta.status(200).send({
		titulo:"Node API",
		versao:"0.0.11"
	});
});

module.exports = rotas;
