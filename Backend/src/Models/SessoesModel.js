const moongose = require ("mongoose");

const Schema = moongose.Schema;

const SessoesSchema = new Schema ({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        unique: true,
    },
    modelo: { type: String },
}, {
    timestamps: true
})

const SessoesModel = moongose.model('sessoes', SessoesSchema);

module.exports = SessoesModel;