const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
  host: 'dbmysql',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('ola mundo')`;
connection.query(sql);

app.get('/', (req,res) => {
  const selectSql = 'SELECT name FROM people';

  connection.query(selectSql, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err.stack);
      return;
    }

    console.log('Nomes encontrados:', result.map(row => row.name));
    res.send('Full Cycle Rocks!!!!!!!Nomes encontrados: ' + result.map(row => row.name).join(', ') + '');
    connection.end();
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});