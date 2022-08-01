
(async () => {
    const db = require("./db")
    console.log('Começou')
    console.log('SELECT nome from clientes where idclientes = 1;')
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();
