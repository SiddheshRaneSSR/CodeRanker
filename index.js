// const http=require('http');
// const fs=require('fs');

// const express = require('express');
// const app = express();


// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
  
// });

// app.get('/:page', function(req, res) {
//   const page = req.params.page;
//   const filePath = __dirname + '/' + page;
  
  
//   if (fs.existsSync(filePath)) {
//     res.sendFile(__dirname + '/' + page);
//     // res.sendFile(filePath);
//   } else {
//     res.send('Directory not found. Redirecting to home page...');
//     setTimeout(() => {
//       res.sendFile(__dirname + '/index.html');
//     }, 3000);
//     const indexPath = __dirname + '/index.html';
//     res.status(404).sendFile(indexPath);
    
  
//   }
// });


// app.listen(3000, function() {
//   console.log('Server is running on port 3000');
// });


const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const connecttodatabase=require('./server');

connecttodatabase();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:page', function(req, res) {
  const page = req.params.page;
  const filePath = __dirname + '/' + page;
  
  if (fs.existsSync(filePath)) {
    res.sendFile(__dirname + '/' + page);
  } else {
    res.status(404).send('Directory not found. Redirecting to home page...');
  }
});

app.use(function(req, res) {
  res.status(404).sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

