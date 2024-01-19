const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'dbserver',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');

app.get("/",(req, res)=>{
    let sql = `insert into people (name) values ('Fernando Silverio Raimundo Junior');`;
    let connection = mysql.createConnection(config);
    connection.query(sql, function (err, rows, fields) {
        if (err)
            console.log(`Insert -> ${err}\nCode:${err.code}\nSQL:${err.sql}\n\n\n`);
    });
    connection.query(`select id,name from people`, function (err, rows, fields) {
        res.send('<h1>Full Cycle Rocks!</h1><h2>Registros no Banco:</h2><pre>'+JSON.stringify(rows)+'</pre>');
        if(err)
        console.log('Connection result error ->' + err.code);
    });
    connection.end();
});

app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`)
});
