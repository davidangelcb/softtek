const axios = require('axios');
const { translateKeys } = require('../../utils/utils');


const link = "https://swapi.dev/api/planets/";

async function findAll(req, res) {
  try {
  
    const response = await axios.get(link);
    const planets = response.data.results;
    if(planets.length == 0 ){
        res.status(200).json({ message: "No hay Planetas!!" });
    }
    const planetMap = planets.map(planet => {
        return {
            nombre: planet.name,
            terreno: planet.terrain 
        };
    });

    const reply = {
        cantidad : planetMap.length ,
        planetas: planetMap
    };

    res.json(reply);

  } catch (err) {
    process.env.STAGE === "dev"
      ? res.status(400).json(err)
      : res.status(400).json({ message: "Malformed payload" });
  }
}

async function findById(req, res) {
  try {
    const response = await axios.get(link+'/'+req.params.uid);
    const planets = response.data;

    const planet = translateKeys('planets', planets);
     
    res.json(planet);

  } catch (err) {
    process.env.STAGE === "dev"
      ? res.status(400).json(err)
      : res.status(400).json({ message: "Malformed payload" });
  }
}

module.exports = {
  findAll,
  findById
};
