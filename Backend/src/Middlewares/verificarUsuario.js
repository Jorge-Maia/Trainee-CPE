function verificarUsuario(req, res, next) {
    const usuarioId = req.params.id || req.params.id_usuario || req.body.id_usuario;

    if (!usuarioId || String(req.usuarioId) !== String(usuarioId)) {
        return res.status(403).json({ mensagem: "Operação não permitida! Você só pode acessar seu próprio perfil." });
    }

    next();
}

module.exports = verificarUsuario;