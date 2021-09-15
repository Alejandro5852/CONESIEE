const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'conesieee',
    password: '1234',
    database: 'ieeedb',
    connectionLimit: 5
});
pool.getConnection((err, connection) => {
    if (err) {
        console.log("ERROR DB");
    }
    if (connection) connection.release();
    return;
});

module.exports = pool;