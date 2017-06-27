'use strict';

const url = require('url');
const Notificacao = require('./NotificacaoService');

module.exports.solicitarPedido = function solicitarPedido (req, res, next) {
  Notificacao.solicitarPedido(req.body, res, next);
};

module.exports.enviarOrcamento = function enviarOrcamento (req, res, next) {
  Notificacao.enviarOrcamento(req.swagger.params, res, next);
};

module.exports.aprovarPedido = function aprovarPedido (req, res, next) {
  Notificacao.aprovarPedido(req.swagger.params, res, next);
};

module.exports.reprovarPedido = function reprovarPedido (req, res, next) {
  Notificacao.reprovarPedido(req.swagger.params, res, next);
};

module.exports.verificarSituacaoPedido = function verificarSituacaoPedido (req, res, next) {
  Notificacao.verificarSituacaoPedido(req.swagger.params, res, next);
};



