const { default: mongoose } = require("mongoose");
const moongose = require ("mongoose");
const { required } = require("zod/mini");
const bcrypt = require ("bcrypt");

const Schema = moongose.Schema;

const UsuarioSchema = new Schema ({
    email : { type: String, unique: true, required: true },
    senha : { type: String, required: true, select: false },
    nome : { type: String, unique: true, required: true },
    cargo : { type: String, required: true },
    status : { type: String}
})

UsuarioSchema.pre('save', async function(next) {
    
    const user = this;
    
    if(user.isModified('senha')) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.senha, salt);
        user.senha = hash;
    }   
    next();
});

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports= UsuarioModel;