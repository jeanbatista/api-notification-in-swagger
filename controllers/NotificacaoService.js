'use strict';

const solicitacaoModel = require('../domain/notificacao/Notificacao.model');

exports.solicitarPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        orcamento: args.codigo,
        link: `http://localhost:8081/api/v1/notificacoes/pedidos/orcamento/${args.codigo}/entrega/2018-10-12/envio`
    };

    model.solicitarPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}

exports.enviarOrcamento = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        orcamento: args.num.value,
        entrega: args.data.value,
        links: [
            { aprovar: `http://localhost:8081/api/v1/notificacoes/pedidos/orcamento/${args.num.value}/aprova` },
            { reprovar: `http://localhost:8081/api/v1/notificacoes/pedidos/orcamento/${args.num.value}/reprova` }
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
        message: `Orçamento: ${args.num.value} foi aprovado com êxito`
    };
    
    model.aprovarPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}

exports.reprovarPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        message: `Orçamento ${args.num.value} foi reprovado com êxito.`
    };

    model.reprovarPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}

exports.verificarSituacaoPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let obj = {
        orcamento: args.num.value,
        situacao: args.estado.value
    };
    
    model.verificarSituacaoPedido(obj, (results) => {
        res.end(JSON.stringify(results));
    });
}







