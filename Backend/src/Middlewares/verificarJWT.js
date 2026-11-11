const jwt = require("jsonwebtoken");


function verificarJWT(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403)
        .json({ mensagem: "Header de autorização não encontrado!" });
    }
    const [bearer, token] = authHeader.split(" ");

    if (!/^Bearer/.test(bearer)) {
        return res.status(403)
        .json({ mensagem: "Header de autorização mal formatado!" });
    }

    if(!token) {
        return res.status(403)
        .json({ mensagem: "JWT token não encontrado!" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
        if (err) {
            return res.status(403).json({ mensagem: "Token JWT inválido!" });
        }
        req.usuarioId = usuario._id;
        next();
    })
}

module.exports = verificarJWT;