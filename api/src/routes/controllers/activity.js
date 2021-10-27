const { Activity } = require('../../db.js');


async function postActivity (req, res, next) {
  let {name, difficulty, duration, season, countries} = req.body;
  season = season[0].toUpperCase() + season.slice(1).toLowerCase();
  try{
    const newActivity = await Activity.create({name, difficulty, duration, season});
    res.json(await newActivity.addCountries(countries))
  }
  catch(err){
    next(err)
  }
};



module.exports = {
  postActivity
};
