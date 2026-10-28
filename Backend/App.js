const express = require("express");

const app = express();

app.get("", (req,res) => {
    return res.json({
        message: "Hello World!"
    })
})

app.get("/cadastro", (req,res) => {
    return res.json({
        message: "Funcao de Cadastro!"
    })
})

app.get("/login", (req,res) => {
    return res.json({
        message: "Funcao de Cadastro!"
    })
})

app.get("/home", (req,res) => {
    return res.json({
        message: "Funcao de Cadastro!"
    })
})

app.listen(8000, () => console.log("Servidor Rodando!"));