const { default: mongoose } = require("mongoose");
const moongose = require ("mongoose");
const { required } = require("zod/mini");
const bcrypt = require ("bcrypt");
const SessoesModel = require ("./SessoesModel");
const Schema = moongose.Schema;

const UsuarioSchema = new Schema ({
    email : { type: String, unique: true, required: true },
    senha : { type: String, required: true, select: false },
    nome : { type: String, unique: true, required: true },
    cargo : { type: String, required: true },
    status : { type: String}
})

UsuarioSchema.pre('save', async function(next) {
    
    const usuario = this;
    
    if(usuario.isModified('senha')) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(usuario.senha, salt);
        usuario.senha = hash;
    }   
    next();
});

UsuarioSchema.pre("deleteOne", 
    { document: true , query: false }, 
    async function() {
    const usuario = this;

    return SessoesModel.deleteOne({ id_usuario: usuario._id });
});

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports= UsuarioModel;