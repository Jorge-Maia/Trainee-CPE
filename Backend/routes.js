const { Router } = require("express");
const UsuarioController = require ("./src/Controllers/UsuarioControllers");
const SessoesController = require ("./src/Controllers/SessoesControllers");
const AuthController = require ("./src/Controllers/AuthController");
const UsuarioValidator = require("./src/Validators/UsuarioValidator");
const SessoesValidator = require("./src/Validators/SessoesValidator");
const AuthValidator = require("./src/Validators/AuthValidator");
const verificarJWT = require("./src/Middlewares/verificarJWT");
const verificarUsuario = require("./src/Middlewares/verificarUsuario");


const rotas = Router();

//Usuarios
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios',verificarJWT, UsuarioController.read);
rotas.delete('/usuarios/:id',verificarJWT, verificarUsuario, UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', verificarJWT, verificarUsuario, UsuarioValidator.update, UsuarioController.update);
rotas.get("/perfil", verificarJWT, UsuarioController.perfil);

//Sessoes
rotas.post('/sessoes', SessoesValidator.create, verificarUsuario, SessoesController.create);
rotas.get('/sessoes',verificarJWT, SessoesController.read);
rotas.delete('/sessoes/:id_usuario',verificarJWT, verificarUsuario, SessoesValidator.destroy, SessoesController.delete);
rotas.put('/sessoes/:id_usuario',verificarJWT, SessoesController.update);

//AUTH
rotas.post('/login', AuthValidator.login, AuthController.login);

module.exports = rotas;

