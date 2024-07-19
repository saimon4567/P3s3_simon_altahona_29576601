const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('inventario.db', (err) => {
    if(err) {
        console.error(err);
    }
    console.log('Conectado a la Base de Datos')
});




module.exports = {
  db
}