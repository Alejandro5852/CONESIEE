const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const pool = require('./helpers/database');
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get('/api/conferencias', async function (req, res) {
    try {
        const query = "select conferencia_id as id, tema, expositor, area, DATE_FORMAT(inicio, '%d/%m/%y') as fecha, DATE_FORMAT(inicio, '%r') as inicio,  DATE_FORMAT(fin, '%r') as fin from conferencia order by conferencia.inicio, inicio asc";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

/*
select conferencia_id as value, CONCAT(tema," (",DATE_FORMAT(inicio, '%d/%m/%y'),")") as label from conferencia except select id_conferencia, CONCAT(conferencia.tema," (",DATE_FORMAT(conferencia.inicio, '%d/%m/%y'),")") from asignacion join conferencia on id_conferencia = conferencia_id where id_participante = (select participante_id from participante where identificacion = '123456789');
*/
app.get('/api/infoConf', async function (req, res) {
    try {
        const query = "select conferencia_id as value, CONCAT(tema, \"  (\",DATE_FORMAT(inicio, '%d/%m/%y'), \")\") as label from conferencia order by conferencia.inicio asc";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
app.post('/api/getUsr', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        const query = "select * from participante where identificacion = '" + req.body.identificacion + "' or correo = '" + req.body.correo + "'";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
app.post('/api/getUsrU', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        const query = "select * from participante where identificacion = '" + req.body.identificacion + "' or correo = '" + req.body.correo + "' or carnet = '" + req.body.carnet + "'";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
app.post('/api/newUser', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        const query = "insert into participante (nombres, apellidos, identificacion, correo, carrera, facultad, universidad, carnet) values (" + "'" + req.body.nombres + "', " + "'" + req.body.apellidos + "', " + "'" + req.body.identificacion + "', " + "'" + req.body.correo + "', " + "'" + req.body.carrera + "', " + "'" + req.body.facultad + "', " + "'" + req.body.universidad + "', " + "'" + req.body.carnet + "')";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ status: 400 });
    }
});

app.post('/api/newAsignacion', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        for (var i = 0; i < req.body.conferencias.length; i++) {
            const query = "insert into asignacion (id_participante, id_conferencia) values (" + "(select participante_id from participante where identificacion = '" + req.body.identificacion + "'), " + req.body.conferencias[i].value + ")";
            await pool.query(query);
            console.log(query);
        }
        //res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ status: 400 });
    }
});


app.post('/api/asignaciones', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        const query = "select asignacion_id, DATE_FORMAT(asignacion.fecha, '%d/%m/%y %r') as fecha_asignacion, conferencia.tema as tema_conferencia, DATE_FORMAT(conferencia.inicio, '%d/%m/%y') as fecha_conferencia, DATE_FORMAT(conferencia.inicio, '%r') as hora_inicio,  DATE_FORMAT(conferencia.fin, '%r') as hora_fin  from asignacion join conferencia on id_conferencia = conferencia_id where id_participante = (select participante_id from participante where identificacion = '" + req.body.identificacion + "')";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
        //res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ status: 400 });
    }
});

app.post('/api/asignacionesCaja', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        const query = "select asignacion_id as value, conferencia.tema as label from asignacion join conferencia on id_conferencia = conferencia_id where id_participante = (select participante_id from participante where identificacion = '" + req.body.identificacion + "')";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
        //res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ status: 400 });
    }
});

app.post('/api/faltantes', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        const query = "select conferencia_id as value, CONCAT(tema,\" (\",DATE_FORMAT(inicio, '%d/%m/%y'),\")\") as label from conferencia except select id_conferencia, CONCAT(conferencia.tema,\" (\",DATE_FORMAT(conferencia.inicio, '%d/%m/%y'),\")\") from asignacion join conferencia on id_conferencia = conferencia_id where id_participante = (select participante_id from participante where identificacion = '"+ req.body.identificacion + "')";
        console.log(query);
        const rows = await pool.query(query);
        res.status(200).json(rows);
        //res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ status: 400 });
    }
});

app.post('/api/eliminarAsign', async function (req, res) {
    try {
        //const data = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, conferencias: selected };
        for (var i = 0; i < req.body.conferencias.length; i++) {
            const query = "delete from asignacion where asignacion_id = '"+req.body.conferencias[i].value + "'";
            await pool.query(query);
            console.log(query);
        }
        //res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ status: 400 });
    }
});

const port = 5000;
app.listen(port, () => console.log(`Servidor escuchando en ${port}`));


// delete from asignacion where asignacion_id='101';