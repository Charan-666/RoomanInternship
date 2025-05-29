const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', (req, res) => {
  const { name, email, age, feedback } = req.body;
  res.send(`
    <h2>Thank You, ${name}!</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Feedback:</strong><br>${feedback}</p>
    <br><a href="/">Go Back</a>
  `);
});

app.listen(port,'0.0.0.0', () => {
  console.log(`App running at http://localhost:${port}`);
});
