const express = require('express');
const app = express();
app.get('/api/costumers', (req, res) => {
    const costumer = [{
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
    }, {
        id: 2,
        firstName: 'Steve',
        lastName: 'Smith'
    }, {
        id: 1,
        firstName: 'Mary',
        lastName: 'Swason'
    }];
    res.json(costumer);
});
const port = 5000;
app.listen(port, () => console.log(`Servidor escuchando en ${port}`));