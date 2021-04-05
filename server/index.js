const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql')

//connect DB
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto4',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//get
app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM recursos";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//post
app.post("/api/insert", (req, res) => {

    const chave = req.body.chave
    const valor = req.body.valor
    
    const sqlInsert = "INSERT INTO recursos (chave, valor) VALUES (?,?)"
    db.query(sqlInsert, [chave, valor], (err, result) => {
        console.log(result);
    });
});

//delete
app.delete('/api/delete/:chave', (req, res)=> {
    const name = req.params.chave
    const sqlDelete = "DELETE FROM recursos WHERE chave = ?";

    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err)
    });
});

//update
app.put('/api/update', (req, res)=> {
    const name = req.body.chave
    const valor = req.body.valor
    const sqlUpdate = "UPDATE recursos SET valor = ? WHERE chave = ?";

    db.query(sqlUpdate, [valor, name], (err, result) => {
        if (err) console.log(err)
    });
});

//port definition
app.listen(3001, () => {
    console.log('runing on port 3001');
});