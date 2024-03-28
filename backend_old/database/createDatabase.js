const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydb.sqlite');

db.run(`CREATE TABLE guest (
    idGuest INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT
)`);

db.run(`CREATE TABLE image (
    idImage INTEGER PRIMARY KEY AUTOINCREMENT, 
    url TEXT, 
    FK_idGuest INTEGER,
    FOREIGN KEY (FK_idGuest) REFERENCES guests(idGuest)
)`);

db.run(`INSERT INTO guest (name) VALUES 
    ('Rose'), ('Edmilson'), ('Silvana '), ('Luciano'), ('Luana '),
    ('Juliana '), ('Vagner'), ('Rafael'), ('Paulinha'), ('Jonas'), ('Artur'), ('Flávia'), ('Fernando'),
    ('Maria'), ('Vicente'), ('Nicolas'), ('Erick'), ('Icaro'), ('Leonardo'), ('Mary'), ('Luciana'), 
    ('Luan '), ('Carolina'), ('Giovani'), ('Marcela'), ('Daniel'), ('Rosimeri'), ('Rosana'), ('Fabricia'),
    ('Fabricio'), ('Kelvin'), ('Zuleide'), ('Dinarte'), ('Edielson'), ('Cindia'), ('Luiz'), ('Edilene'), 
    ('Regis'), ('Edna'), ('Abner'), ('Kezia'), ('Milene'), ('Namorado Milene'), ('Marone'), ('Manoel'),
    ('Pedro'), ('Daiane'), ('Ana Paula'), ('Vitor'), ('Daniele'), ('Elisandro'), ('Andrea'), ('Pedro'),
    ('Tais'), ('Thiago'), ('Dione'), ('Elinson'), ('Renata'), ('Gabriel'), ('Carlos'), ('Esposa Carlos'), 
    ('Paola'), ('Samuel'), ('Paula'), ('Maria Gabriela'), ('Lucas'), ('F. Moraes'), ('Esposa F. Moraes'), 
    ('Chico'), ('Esposa Chico'), ('João'), ('Acompanhante João'), ('Mano'), ('Bela'), ('Dani'), ('Tainá'), 
    ('Cristian')`, [], (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Usuário inserido com sucesso.');
});

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conexão com o banco de dados encerrada.');
});