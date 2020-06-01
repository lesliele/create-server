const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use('/', express.static(__dirname + '/dist'));
app.get('/', (req, res, next) => {
  const file = fs.readFileSync('./dist/index.html', 'utf-8');
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(file);
})

app.listen(9998, () => {
  console.log('端口9998开启');
})