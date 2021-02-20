

const aplicacao = require('../src/aplicacao')
const HTTP = require('http');
const debug = require('debug')('nodestr:server');



const porta = procurandoPorta(process.env.PORT || '3000'); 
const host = '0.0.0.0'
aplicacao.set('port',porta);


const server = HTTP.createServer(aplicacao);

server.listen(porta, host);
server.on('error',temErro)
console.log('Ouvindo na porta:' + porta);



function procurandoPorta(valor){ // a porta geralmente e fornecida pelo serviço nuvem
	const porta = parseInt(valor, 10);
	
	if(isNaN(porta)){return valor;}
	if(porta>=0){return porta;}
	return false;
}


function temErro(error){ // verifica se a porta esta ocupada
	if(error.syscall !== 'listen'){
		throw error;
	}
	
	const bind = typeof port === 'string' ?
		'Pipe' + porta:
		'Porta' + porta;
		
	switch(error.code){
		case 'EACCES':
			console.error(bind+'Erro de acesso');
			process.exit(1);
			break;
		case 'EADRINUSE':
			console.error(bind+'Endereço ja em uso');
			process.exit(1);
			break;
		default:
			throw error;
	}
}
