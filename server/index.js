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

//get descrCozido
app.get('/api/get/descrCozido', (req, res) => {
    const sqlSelect = "SELECT * FROM recursos WHERE chave='descrCozido';";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//get descrConfraria
app.get('/api/get/descrConfraria', (req, res) => {
    const sqlSelect = "SELECT * FROM recursos WHERE chave='descrConfraria';";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//get descrDomingos
app.get('/api/get/descrDomingos', (req, res) => {
    const sqlSelect = "SELECT * FROM recursos WHERE chave='descrDomingos';";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});


//get restaurtantes
app.get('/api/get/restaurantes', (req, res) => {
    const sqlSelect = "SELECT * FROM restaurante;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//get regiao
app.get('/api/get/regiao', (req, res) => {
    const sqlSelect = "SELECT * FROM regiao;";
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
        console.log(err);
    });
});


//post restaurante
app.post("/api/insertres", (req, res) => {

    const nome = req.body.nome
    const morada = req.body.morada
    const contacto = req.body.contacto
    const diaCozido = req.body.diaCozido
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const estado = req.body.estado
    const precoMinimo = req.body.precoMinimo
    const precoMaximo = req.body.precoMaximo
    const horaInicio = req.body.horaInicio
    const horaFim = req.body.horaFim
    const avaliacaoTotal = req.body.avaliacaoTotal
    const opcRegiao = req.body.opcRegiao
    const recomendado = req.body.recomendado
    
    const sqlInsertRest = "INSERT INTO restaurante (nome, morada, contacto, diaCozido, latitude, longitude, estado, precoMinimo, precoMaximo, horaInicio, horaFim, avaliacaoTotal, idRegiao, recomendado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsertRest, [nome, morada, contacto, diaCozido, latitude, longitude, estado, precoMinimo, precoMaximo, horaInicio, horaFim, avaliacaoTotal, opcRegiao, recomendado], (err, result) => {
        console.log(res);
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