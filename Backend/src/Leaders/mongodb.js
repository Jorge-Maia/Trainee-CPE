const moongose = require("moongose");

async function startDB() {
    await moongose.connect('mongodb+srv://jorgemaia_db_user:vhMldugn9QAQj59q@cpe.uftd8xw.mongodb.net/')
}

module.exports = startDB