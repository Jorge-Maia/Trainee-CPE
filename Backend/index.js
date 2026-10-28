const Loaders = require("./src/Leaders/index");
const app = require("./App");

Loaders.start();

app.listen(8000,() => console.log("Servidor rodando"));