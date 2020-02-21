import mysql from 'promise-mysql';

import keys from './keys';

const db = mysql.createPool(keys.database);

db.getConnection()
.then(connection => {
    db.releaseConnection(connection);
    console.log('DB conectada');
});

export default db;