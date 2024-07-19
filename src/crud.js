const { db } = require('./database.js')

console.log(db)

function Productos (req, res) {
    let productos = []
    db.all(`SELECT *
    FROM productos p
    INNER JOIN categorias c ON p.categoria_id = c.id`, (err, data) => {
        if(err) {
            return res.send(err)
        }
        productos = data;
        res.render('productos.ejs', {productos})  
    })    
}



module.exports = {
    Productos
}