const { default: mongoose } = require("mongoose");
const moongose = require ("mongoose");
const { required } = require("zod/mini");

const Schema = moongose.Schema;

const UsuarioSchema = new Schema ({
    email : { type: String, unique: true, required: true },
    senha : { type: String, required: true, select: false },
    nome : { type: String, unique: true, required: true },
    cargo : { type: String, required: true },
    status : { type: String}
})

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports= UsuarioModel;