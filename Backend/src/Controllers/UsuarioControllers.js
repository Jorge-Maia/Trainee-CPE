const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {
    async create(req, res) {
        try {
            const usuario = await UsuarioModel.create(req.body);

            const { senha, ...novoUsuario} = usuario.toObject();

        return res.status(200).json(novoUsuario)

        }
        catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro ao criar usuário!" });
        }
    }

    async read(req, res) {
        try {
        const usuarios =await UsuarioModel.find();

        return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro nessa validação!" });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
            
            if (!usuarioEncontrado) {
                return res.status(404).json({ "mensagem": "Usuário não encontrado!" });
            }

            const usuario = await usuarioEncontrado.set(req.body).save();

            return res.status(200).json({"mensagem" : "Usuário atualizado com sucesso!"})
        
    } catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro ao atualizar usuário!" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
            
            if (!usuarioEncontrado) {
                return res.status(404).json({ "mensagem": "Usuário não encontrado!" });
            }
            await usuarioEncontrado.deleteOne();

            return res.status(200).json({"mensagem" : "Usuário deletado com sucesso!"})
        
        } catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro ao deletar usuário!" });
        }
    }

}

module.exports = new UsuarioController();