const { Router } = require("express");
const UsuarioController = require ("./src/Controllers/UsuarioControllers");
const SessoesController = require ("./src/Controllers/SessoesControllers");
const UsuarioValidator = require("./src/Validators/UsuarioValidator");

const rotas = Router();

//Usuarios
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios',UsuarioController.read);
rotas.delete('/usuarios/:id',UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id',UsuarioValidator.update, UsuarioController.update);

//Sessoes
rotas.post('/sessoes',SessoesController.create);
rotas.get('/sessoes',SessoesController.read);
rotas.delete('/sessoes/:id',SessoesController.delete);
rotas.put('/sessoes/:id',SessoesController.update);

module.exports = rotas;

