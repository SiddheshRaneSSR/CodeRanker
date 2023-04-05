const express = require('express');
const mysql = require('mysql');

const app = express();

// configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'coderanker'
});

// connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// handle POST request to /login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // query database to check if username/password combination is valid
  const sql = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`;
  db.query(sql, (err, results) => {
    if (err) throw err;

    if (results.length === 1) {
      res.send('Login successful');
    } else {
      res.send('Invalid username or password');
    }
  });
});

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
