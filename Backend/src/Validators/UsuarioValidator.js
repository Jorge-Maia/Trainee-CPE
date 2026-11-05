const { z } = require("zod");
const moongose = require("mongoose");

function validateRequest(schemas) {
    return (req, res, next) => {
        for (const parte of ["params", "query", "body"]) {
            if (!schemas[parte]) continue;

            const resultado = schemas[parte].safeParse(req[parte]);

            if (!resultado.success) {
                return res.status(400).json({
                    erros: resultado.error.issues.map((i) => i.message)
                });
            }

            if (parte === "body") req.body = resultado.data;
        }

        next();
    };
}

const create = validateRequest({
    body: z.object({
        nome: z.string({ error: "O campo 'nome' é obrigatório" }),
        email: z.email({ error: "O campo 'email' é obrigatório" }),
        senha: z
            .string({ error: "O campo 'senha' é obrigatório" })
            .min(6, "O campo 'senha' deve ter no mínimo 6 caracteres"),
        cargo: z.string({ error: "O campo 'cargo' é obrigatório" }),
        status: z.string({ error: "O campo 'status' é obrigatório" }),

    })
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(moongose.isValidObjectId, { message: "O ID não é válido" })
    })
});

const update = validateRequest({
    params: z.object({
            id: z.custom(moongose.isValidObjectId, { message: "O ID não é válido" })
    }),
    body: z.object({
        nome: z.string().optional(),
        email: z.email().optional(),
        senha: z
            .string()
            .min(6, "O campo 'senha' deve ter no mínimo 6 caracteres").optional(),
        cargo: z.string().optional(),
        status: z.string().optional(),

    })
});

module.exports = { create, update, destroy };