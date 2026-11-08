const { z } = require("zod");

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

const login = validateRequest({})
    body: z.object({
        email: z.email({ error: "O campo 'email' é obrigatório" }),
        senha: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" })
    })


module.exports = { login };