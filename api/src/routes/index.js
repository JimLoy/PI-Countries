const { Router } = require('express');
const { getCountries, getCountriesId } = require('../controllers/countries.js');
const { postActivity, getActivitiesName } = require('../controllers/activity.js');


const router = Router();


router.get('/countries', getCountries);

router.get('/countries/:id', getCountriesId);

router.get("/activitiesName", getActivitiesName);

router.post('/activity', postActivity);


module.exports = router;
