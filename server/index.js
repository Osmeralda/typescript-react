const express = require('express');//määritellään että express vaatii expressin
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express(); //määritellään että meidän appi on express funktio
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'uutisdb'
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));



app.get('/api/get', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM uutisia";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {

    const uutisTitle = req.body.uutisTitle
    const uutisContent = req.body.uutisContent

const sqlInsert = "INSERT INTO uutisia (uutisTitle, uutisContent) VALUES (?,?)";

db.query(sqlInsert, [uutisTitle, uutisContent], (err, result) => {
    console.log(err);
});
});

app.delete("/api/delete/:uutisTitle", (req, res) => {
    const name = req.params.uutisTitle;
    const sqlDelete = 
    "DELETE FROM uutisia WHERE uutisTitle=?";

    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    });
});

app.put("/api/update", (req, res) => {
    const name = req.body.uutisTitle;
    const content = req.body.uutisContent;
    const sqlUpdate = 
    "UPDATE uutisia SET uutisContent=? WHERE uutisTitle=?";

    db.query(sqlUpdate, [content, name], (err, result) => {
        if (err) console.log(err);
    });
});


app.listen(3001, () => { //ylempänä määritelty app sekä komento listen funktiomerkki() jonka sisään valitaan portti ja tehdään nuolifunktio
    console.log('toimii portissa 3001'); //logataan että toimii ja terminaaliin komento node index.js jolla lähtee käyntiin
});