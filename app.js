const express = require('express');
const app = express();
const port = 3030;
const path = require('path')

app.use(express.static('public'))

app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'views', 'Home.html')))

app.listen(port, () => console.log(`Servidor funcionando en http://localhost:${port}`));
