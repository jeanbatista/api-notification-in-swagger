'use strict';

const solicitacaoModel = require('../domain/notificacao/Notificacao.model');

exports.solicitarPedido = function(args, res, next) {
    let model = new solicitacaoModel;
    res.setHeader('Content-Type', 'application/json');

    let msg = `Notificação. Pedido solicitado, produto: ${args.codigo}, quantidade: ${args.quantidade},observação: ${args.observacao}`;
    model.solicitarPedido(msg, (results) => {
        res.end(JSON.stringify(results));
    });
}

