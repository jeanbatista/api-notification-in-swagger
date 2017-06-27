'use strict';

var url = require('url');

var Notificacao = require('./NotificacaoService');

module.exports.solicitarPedido = function solicitarPedido (req, res, next) {
  Notificacao.solicitarPedido(req.body, res, next);
};
