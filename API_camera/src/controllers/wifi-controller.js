const qtd = [];
const h = [];

exports.get = (requesicao, resposta,proximo)=>{
	resposta.status(200).send(dados);
};

exports.post = (requesicao, resposta, proximo)=>{
		resposta.status(201).send(requesicao.body);
		const { quantidade, hora } = requesicao.body;
		qtd.push(quantidade)
		h.push(hora)
		console.log(requesicao.body)
};

exports.put = (requesicao, resposta, proximo)=>{
	const id = requesicao.params.id;
	resposta.status(200).send({
		id: id,
		item: requesicao.body
	});
};

exports.delete = (requesicao, resposta, proximo)=>{ 	
	resposta.status(200).send(requesicao.body);
}
