const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'coderanker'
});

// Set up body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up session middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));


// Signup endpoint
app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  if (username && email && password) {
    connection.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [username, email, password], (error, results, fields) => {
    if (error) throw error;
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect('/index.html');
    res.end();
    });
  } else {
    res.send('Please enter username, password, and email!');
  }
});

// Home endpoint
app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.send(`Welcome back, ${req.session.username}!`);
  } else {
    res.send('Please login to view this page!');
  }
  res.end();
});

// Start server

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
