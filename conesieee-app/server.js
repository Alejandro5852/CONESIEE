const express = require('express');
const app = express();
const pool = require('./helpers/database');
app.get('/api/conferencias', async function(req, res) {
    try {
        const query = "select conferencia_id as id, tema, expositor, area, DATE_FORMAT(inicio, '%d/%m/%y') as fecha, DATE_FORMAT(inicio, '%r') as inicio,  DATE_FORMAT(fin, '%r') as fin from conferencia order by conferencia.inicio, inicio asc";
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/api/infoConf', async function(req, res) {
    try {
        const query = "select conferencia_id as value, CONCAT(tema, \"  (\",area, \")\") as label from conferencia";
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

const port = 5000;
app.listen(port, () => console.log(`Servidor escuchando en ${port}`));