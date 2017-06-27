var SolicitacaoModel = function () { };

SolicitacaoModel.prototype.solicitarPedido = async function(msg, callback) {
    let json = {
        message: msg
    };
    callback(json);
}

module.exports = SolicitacaoModel;