const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('start server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/chinese', (req, res) => {
    res.render('about.html');
});

app.get('/db', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('select * from Test', (error, results, fields) => {
            res.send(JSON.stringify(results));
            console.log(results);
            connection.release();
            if (error) throw error;
        });
    });
});

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'example.org',
    user: 'bob',
    password: 'secret',
});
