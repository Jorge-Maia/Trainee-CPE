const express = require("express");
const rotas = require ("./routes")
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(rotas);
app.use((req, res) => {
    return res.status(404).json({ message: `Rota '${req.originalUrl}' não encontrada` });
});


module.exports= app;