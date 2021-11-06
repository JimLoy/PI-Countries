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
          name: coun.name.common,
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


async function getCountries (req, res, next){
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
        attributes: ['id','flag', 'name', 'continent','population'],
        include:  Activity
      });
      if (country.length < 1) res.json('Country Not Found')
      res.json(country)
    } else {//-------------------SIN--NOMBRE--------------------------------
    country = await Country.findAll({attributes:['id','flag', 'name', 'continent','population']})
    res.json(country)
    }
  } catch (err) {
    next(err)
  }
};


async function getCountriesId (req, res, next){
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
  getCountriesId,
};


/*async function getCountriesByName (countries){
  countries = countries.split(',')
  countries = countries.map(country => country[0].toUpperCase() + country.slice(1).toLowerCase())
  try{
    countries = await Promise.all(countries.map(name => {
      let id = Country.findAll({
        where: {
          name: { [Op.substring]: name }
        },
        attributes: 'id',
      });
      return id
    }));

    return countries;
  } catch (err){
    console.log(err)
  }
}*/
