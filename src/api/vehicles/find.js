const axios = require('axios');
const { translateKeys } = require('../../utils/utils');


const link = "https://swapi.dev/api/vehicles/";

async function findAll(req, res) {
  try {
  
    const response = await axios.get(link);
    const vehicles = response.data.results;
    if(vehicles.length == 0 ){
        res.status(200).json({ message: "No hay Planetas!!" });
    }
    const vehicleMap = vehicles.map(vehicle => {
        return {
            nombre: vehicle.name,
            modelo: vehicle.model 
        };
    });

    const reply = {
        cantidad : vehicleMap.length ,
        naves: vehicleMap
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
    const vehicles = response.data;

    const vehicle = translateKeys('vehicles', vehicles);
     
    res.json(vehicle);

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
