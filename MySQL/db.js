async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:pokedx@localhost:3306/crud")
    console.log("Conectou")
    global.connection = connection;
    return connection;
}


async function selectCustomers(){
    const conn = await connect();
    const rows = conn.query('SELECT nome FROM clientes WHERE idclientes = 1;');
    return await rows;
}

module.exports = {selectCustomers}
    