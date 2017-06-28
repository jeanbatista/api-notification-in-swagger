'use strict';

const url = require('url');
const Notificacao = require('./NotificacaoService');

module.exports.solicitarPedido = function solicitarPedido (req, res, next) {
  Notificacao.solicitarPedido(req.body, res, next);
};

module.exports.enviarOrcamento = function enviarOrcamento (req, res, next) {
  Notificacao.enviarOrcamento(req.body, res, next);
};

module.exports.aprovarPedido = function aprovarPedido (req, res, next) {
  Notificacao.aprovarPedido(req.body, res, next);
};

module.exports.reprovarPedido = function reprovarPedido (req, res, next) {
  Notificacao.reprovarPedido(req.body, res, next);
};

module.exports.verificarSituacaoPedido = function verificarSituacaoPedido (req, res, next) {
  Notificacao.verificarSituacaoPedido(req.body, res, next);
};



