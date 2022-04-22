const { Activity } = require('../db.js');
const axios = require('axios').default;

async function getCountriesByName (countries,ids){
  try{
    countries = countries.split(',')
    countries = countries.map(country =>
      `https://restcountries.com/v3/name/${country[0].toUpperCase() + country.slice(1).toLowerCase()}`
    )
    await axios.all(countries.map(endP => axios.get(endP))).then( data  => {
      data.map(res => ids.push(res.data[0].cca3))
    })
  }
  catch(err) {
    return err
  }
}


async function postActivity (req, res, next) {
  let {name, difficulty, duration, season, countries} = req.body;
    let ids = []
  try{
    await getCountriesByName(countries,ids)
    season = season[0].toUpperCase() + season.slice(1).toLowerCase()
    const newActivity = await Activity.create({name, difficulty, duration, season});
    await newActivity.addCountries(ids)
    res.json('Activity Created')
  }
  catch(err){
    next(err)
  }
};


async function getActivitiesName (req,res,next) {
  try{
    const names = await Activity.findAll({
      attributes: ["name"],
    });

    res.json(names);
  }
  catch(err){
    next(err)
  }
};

module.exports = {
  postActivity,
  getActivitiesName
};
