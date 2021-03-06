const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World 123');
});

app.get('/delete/', (req, res) => {
  res.send('some other route: ' + req.hostname);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);