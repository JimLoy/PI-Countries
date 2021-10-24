const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getCountries, getCountriesId } = require('./controllers/countries.js');
const { postActivity } = require('./controllers/activity.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', getCountries);

router.get('/countries/:id', getCountriesId);

router.post('/activity', postActivity);


module.exports = router;
