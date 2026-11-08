const Loaders = require("./src/Leaders/index");
const app = require("./App");
const dotenv = require("dotenv");


dotenv.config();
Loaders.start();

const PORT = process.env.PORT || 8000;

app.listen(PORT,() => console.log("Servidor rodando"));