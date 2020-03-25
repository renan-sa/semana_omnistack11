const express = require('express');
const ongController = require('./Controllers/ongController');
const incidentController = require('./Controllers/incidentController');
const profileController = require('./Controllers/profileController');
const sessionController = require('./Controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;