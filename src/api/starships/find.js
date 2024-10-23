const axios = require("axios");
const { translateKeys } = require("../../utils/utils");

const link = "https://swapi.dev/api/starships/";

async function findAll(req, res) {
  try {
    const response = await axios.get(link);
    const starships = response.data.results;
    if (starships.length == 0) {
      res.status(200).json({ message: "No hay Planetas!!" });
    }
    const starshipMap = starships.map((starship) => {
      return {
        nombre: starship.name,
        modelo: starship.model,
      };
    });

    const reply = {
      cantidad: starshipMap.length,
      naves: starshipMap,
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
    const response = await axios.get(link + "/" + req.params.uid);
    const starships = response.data;

    const starship = translateKeys("starships", starships);

    res.json(starship);
  } catch (err) {
    process.env.STAGE === "dev"
      ? res.status(400).json(err)
      : res.status(400).json({ message: "Malformed payload" });
  }
}

module.exports = {
  findAll,
  findById,
};
