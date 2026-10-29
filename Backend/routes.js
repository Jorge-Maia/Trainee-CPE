const { Router } = require("express");
const UsuarioController = require ("./src/Controllers/UsuarioControllers");
const SessoesController = require ("./src/Controllers/SessoesControllers");
const rotas = Router();

//Usuarios
rotas.post('/usuarios', UsuarioController.create);
rotas.get('/usuarios',UsuarioController.read);
rotas.delete('/usuarios/:id',UsuarioController.delete);

//Sessoes
rotas.post('/sessoes',SessoesController.create);
rotas.get('/sessoes',SessoesController.read);
rotas.delete('/sessoes/:id',SessoesController.delete);

module.exports = rotas;

