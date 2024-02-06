const mysql = require('mysql2');
const dotenv =  require('dotenv');
dotenv.config();
const db = mysql.createConnection({
    host: process.env.DATAHOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
// Attempt to connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Database connection successful');
});

// Error event handler
db.on('error', (err) => {
    console.error('Database error:', err);
});


module.exports = db;
