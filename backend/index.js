const http=require('http');
const fs=require('fs');

const express = require('express');
const app = express();


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });
  app.get('/Problems.html', function(req, res) {
    res.sendFile(__dirname + '/Problems.html');
  });
//   app.get('*', (req, res) => {
//     res.sendFile('index.html', {root: '/'});
//   })
app.listen(3000, function() {
  console.log('Server is running on port 8000');
});
