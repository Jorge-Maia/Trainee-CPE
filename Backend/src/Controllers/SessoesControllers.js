const SessoesModel = require ("../Models/SessoesModel");

class SessoesController {
    async create(req, res) {
        try {const sessoes = await SessoesModel.create(req.body);

        return res.status(200).json(sessoes)
        }
        catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro ao criar sessão!" });
        }
    }

    async read(req, res) {
        try{
        const sessoes =await SessoesModel.find().populate('id_usuario', '-senha');

        return res.status(200).json(sessoes);
        } catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro ao ler sessões!" });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const sessoesEncontrada = await SessoesModel.findById(id);
            
            if (!sessoesEncontrada) {
                return res.status(404).json({ "mensagem": "Sessão não encontrada!" });
            }

            const sessoes = await sessoesEncontrada.set(req.body).save();

            return res.status(200).json({"mensagem" : "Sessão atualizada com sucesso!"});
            
        } catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro ao atualizar sessão!" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const sessoesEncontrada = await SessoesModel.findById(id);
            
            if (!sessoesEncontrada) {
                return res.status(404).json({ "mensagem": "Sessão não encontrada!" });
            }
            await sessoesEncontrada.deleteOne();

            return res.status(200).json({"mensagem" : "Sessão deletada com sucesso!"});
        } catch (error) {
            return res.status(500)
            .json({ "mensagem": "Erro ao deletar sessão!" });
        }
    }

}
module.exports = new SessoesController();