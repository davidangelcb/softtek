const axios = require("axios");
const { translateKeys } = require("../../utils/utils");

const link = "https://swapi.dev/api/people/";

async function findAll(req, res) {
  try {
    const response = await axios.get(link);
    const people = response.data.results;
    if (people.length == 0) {
      res.status(200).json({ message: "No hay Personajes!!" });
    }
    const peopleMap = people.map((person) => {
      return {
        nombre: person.name,
        genero: person.gender,
      };
    });

    const reply = {
      cantidad: people.length,
      people: peopleMap,
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
    const people = response.data;

    const person = translateKeys("people", people);

    res.json(person);
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
