const { Country, Activity } = require('../../db.js');
const axios = require('axios').default;



async function preCountry(){
  try{
    let countries = (await axios.get('https://restcountries.com/v3/all')).data;
    countries = await Promise.all(
      countries.map(coun => Country.create({
        id: coun.cca3,
        name: coun.name.official,
        flag: coun.flags[1],
        continet: coun.region,
        capital: coun.capital.shift(),
        subregion: coun.subregion,
        area: coun.area,
        population: coun.population
      }))
    );
    return "Paises cargados exitosamente";
  }
  catch(err) {
    return err;
  }
};


async function getCountries (req, res, next) {
  let {name} = req.params;
  let country;
  try {
    if (name) {
      country = await Country.findAll({
        where: {name},
        include: {
          model: Genre,
          attributes:['name'],
          through: {
            attributes: []
          }
        }
      });
      res.json(country)
    }

    country = await Country.findAll({attributes:['flag', 'name', 'continet']})
    res.json(country)

  } catch (err) {
    next(err)
  }
};


async function getCountriesId (req, res, next) {
  const { id } = req.params;
  try{
    let game = await Country.findByPk(id,{ include: Activity });
    if (game.length < 1) next('Not Found');
    res.json(game);
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
