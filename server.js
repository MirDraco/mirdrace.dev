const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});