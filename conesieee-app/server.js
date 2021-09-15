const express = require('express');
const app = express();
const pool = require('./helpers/database');
app.get('/api/conferencias', async function(req, res) {
    try {
        const query = "select * from conferencias";
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
const port = 5000;
app.listen(port, () => console.log(`Servidor escuchando en ${port}`));