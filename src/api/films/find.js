const axios = require('axios');
const { translateKeys } = require('../../utils/utils');


const link = "https://swapi.dev/api/films/";

async function findAll(req, res) {
  try {
  
    const response = await axios.get(link);
    const films = response.data.results;
    if(films.length == 0 ){
        res.status(200).json({ message: "No hay Peliculas!!" });
    }
    const filmsMap = films.map(film => {
        return {
            titulo: film.title,
            Identificador_Episodio: film.episode_id,
            director: film.director
        };
    });

    const reply = {
        cantidad :films.length ,
        films: filmsMap
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
    const films = response.data;

    const film = translateKeys('films', films);
     
    res.json(film);

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
