require("dotenv").config();
const mongoose = require("mongoose");

function startDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((erro) => console.error("Erro ao conectar:", erro));
}

module.exports = startDB;