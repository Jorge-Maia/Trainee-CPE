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
        id_usuario: z.custom(moongose.isValidObjectId, { message: "O ID não é válido" })
    })
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(moongose.isValidObjectId, { message: "O ID da sessão não é válido" })
    })
});

module.exports = { create, destroy };