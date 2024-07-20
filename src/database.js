const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('inventario.db', (err) => {
    if(err) {
        console.error(err);
    }
    console.log('Conectado a la Base de Datos')
});

db.run(`
  CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT
  )
`);

// Crear la tabla de productos
db.run(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT,
    producto TEXT,
    categoria_id INTEGER,
    existencia_actual INTEGER,
    precio REAL,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
  )
`);

const libros = [
  {
    codigo: 1001,
    producto: 'Cien años de soledad',
    categoria_id: 1,
    existencia_actual: 20,
    precio: 15.99
  },
  {
    codigo: 1002,
    producto: 'Sapiens: De animales a dioses',
    categoria_id: 2,
    existencia_actual: 15,
    precio: 22.50
  },
  {
    codigo: 1003,
    producto: 'La Fundación',
    categoria_id: 3,
    existencia_actual: 12,
    precio: 18.75
  },
  {
    codigo: 1004,
    producto: 'El Señor de los Anillos',
    categoria_id: 3,
    existencia_actual: 18,
    precio: 25.99
  },
  {
    codigo: 1005,
    producto: 'Breve historia de casi todo',
    categoria_id: 2,
    existencia_actual: 8,
    precio: 19.99
  },
  {
    codigo: 1006,
    producto: 'El guardián entre el centeno',
    categoria_id: 1,
    existencia_actual: 22,
    precio: 12.50
  },
  {
    codigo: 1007,
    producto: 'Crónicas Marcianas',
    categoria_id: 3,
    existencia_actual: 10,
    precio: 16.75
  },
  {
    codigo: 1008,
    producto: 'Homo Deus: Una breve historia del mañana',
    categoria_id: 2,
    existencia_actual: 13,
    precio: 21.99
  },
  {
    codigo: 1009,
    producto: 'Orgullo y Prejuicio',
    categoria_id: 1,
    existencia_actual: 27,
    precio: 14.99
  }
];


  // Crear la tabla de productos
  db.run(`
    CREATE TABLE IF NOT EXISTS productos (
      codigo INTEGER PRIMARY KEY,
      producto TEXT,
      categoria_id INTEGER,
      existencia_actual INTEGER,
      precio REAL,
      FOREIGN KEY (categoria_id) REFERENCES categorias(id)
    )
  `);

  // Insertar los libros en la tabla de productos
  const stmt = db.prepare(`
    INSERT INTO productos (codigo, producto, categoria_id, existencia_actual, precio)
    VALUES (?, ?, ?, ?, ?)
  `);

  libros.forEach(libro => {
    stmt.run(libro.codigo, libro.producto, libro.categoria_id, libro.existencia_actual, libro.precio);
  });



module.exports = {
  db
}