const { Op } = require('sequelize');
const { Country, Activity } = require('../../db.js');
const axios = require('axios').default;



async function preCountry(){
  try{
    let countries = (await axios.get('https://restcountries.com/v3/all')).data;
    countries = await Promise.all(
      countries.map(coun =>{
        Country.create({
          id: coun.cca3,
          name: coun.name.official,
          flag: coun.flags[1],
          continent: coun.region,
          capital: coun.capital?coun.capital[0]:'none',
          subregion: coun.subregion?coun.subregion:'none',
          area: coun.area,
          population: coun.population
        })
      })
    );
    return "Countries Loaded Successfully";
  }
  catch(err) {
    return err;
  }
};


async function getCountries (req, res, next) {
  let {name} = req.query;
  let country;
  try {
    if (name) {//-------------------NOMBRE--------------------------------
      country = await Country.findAll({
        where: {
          name: {
            [Op.substring]: name
          }
        },
        attributes: ['flag', 'name', 'continent'],
        include:  Activity
      });
      if (country.length < 1) res.json('Country Not Found')
      res.json({result: country, count: country.length})
    } else {//-------------------SIN--NOMBRE--------------------------------
    country = await Country.findAll({attributes:['flag', 'name', 'continent']})
    res.json({result: country, count: country.length})
    }
  } catch (err) {
    next(err)
  }
};


async function getCountriesId (req, res, next) {
  const { id } = req.params;
  try{
    let country = await Country.findByPk(id,{ include: Activity });
    if (!country) next('Country Not Found');
    res.json(country);
  }
  catch(err) {
    next(err)
  }
};



module.exports = {
  preCountry,
  getCountries,
  getCountriesId
};
