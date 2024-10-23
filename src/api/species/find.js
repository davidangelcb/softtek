const axios = require("axios");
const { translateKeys } = require("../../utils/utils");

const link = "https://swapi.dev/api/species/";

async function findAll(req, res) {
  try {
    const response = await axios.get(link);
    const species = response.data.results;
    if (species.length == 0) {
      res.status(200).json({ message: "No hay Planetas!!" });
    }
    const speciesMap = species.map((speciesOne) => {
      return {
        nombre: speciesOne.name,
        clasificacion: speciesOne.classification,
      };
    });

    const reply = {
      cantidad: speciesMap.length,
      especies: speciesMap,
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
    const species = response.data;

    const speciesOne = translateKeys("species", species);

    res.json(speciesOne);
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
