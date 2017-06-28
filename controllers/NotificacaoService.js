'use strict';

const solicitacaoModel = require('../domain/notificacao/Notificacao.model');

exports.solicitarPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        message: `Pedido ${args.codigo} solicitado com sucesso!`,
        link: {
            url: "http://localhost:4000/v1/orcamentos/envio",
            descricao: "url para envio de orçamento"
        }
    };

    model.solicitarPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}

exports.enviarOrcamento = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        orcamento: args.numero,
        dataEntrega: args.entrega,
        links: [
            { aprovar: "http://localhost:4000/v1/orcamentos/aprovado" },
            { reprovar: "http://localhost:4000/v1/orcamentos/rejeitado" }
        ]
    }

    model.enviarOrcamento(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}

exports.aprovarPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        message: `Orçamento: ${args.numero} aprovado!`,
        link: {
            url: `http://localhost:4000/v1/pedidos/situacao/${args.numero}`,
            descricao: "url para verificar situação do pedido."
        }
    };
    
    model.aprovarPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}

exports.reprovarPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        message: `Orçamento: ${args.numero} cancelado!`
    };

    model.reprovarPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}

exports.verificarSituacaoPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        message: `Pedido: ${args.numero}, situacao: ${args.situacao}`
    };
    
    model.verificarSituacaoPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}







