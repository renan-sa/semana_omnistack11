// Parei a aula com o vídeo no tempo 1h 17min

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);