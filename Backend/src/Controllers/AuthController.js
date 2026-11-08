const UsuarioModel = require("../Models/UsuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    async login(req, res) {
        try {
            const { email, senha } = req.body;

            const usuarioEncontrado = await UsuarioModel.findOne({ email }).select("+senha");

            if (!usuarioEncontrado) {
                return res.status(403).json({ mensagem: "Email ou senha incorretos!" });
            }

            const ehCorrespondente = await bcrypt.compare(senha, usuarioEncontrado.senha);

            if (!ehCorrespondente) {
                return res.status(403).json({ mensagem: "Email ou senha incorretos!" });
            }

            const { senha: hashedSenha, ...payload } = usuarioEncontrado.toObject();

            const token = await jwt.sign(payload, 
                process.env.JWT_SECRET, 
                { expiresIn: process.env.JWT_EXPIRES_IN });

            return res.status(200).json({ token });
    
        }catch (error) {
                    console.log(error);
                    return res.status(500)
                    .json({ "mensagem": "Erro ao criar usuário!" });
                }}}

module.exports = new AuthController();