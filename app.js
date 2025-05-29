const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`<h2>Hello, ${name}! 🎉</h2><br><a href="/">Go Back</a>`);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
