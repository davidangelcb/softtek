const translateKeys = (model, modelObject) => {
  let translate = {};

  switch (model) {
    case "films":
      translate = {
        title: "titulo",
        episode_id: "identificar_episodio",
        opening_crawl: "texto_apertura",
        director: "director",
        producer: "producido",
        release_date: "fecha_lanzamiento",
        characters: "personajes",
        planets: "planetas",
        starships: "naves",
        vehicles: "vehiculos",
        species: "especies",
        created: "creado",
        edited: "editado",
        url: "enlace",
      };
      break;
    case "people":
      translate = {
        name: "nombre",
        height: "altura",
        mass: "masa",
        hair_color: "color_cabello",
        skin_color: "color_piel",
        eye_color: "color_ojos",
        birth_year: "fecha_nacimiento",
        gender: "genero",
        homeworld: "planeta",
        films: "peliculas",
        species: "especies",
        vehicles: "vehiculos",
        starships: "naves",
        created: "creado",
        edited: "editado",
        url: "enlace",
      };
      break;
    case "planets":
      translate = {
        name: "nombre",
        rotation_period: "periodo_rotacion",
        orbital_period: "periodo_orbital",
        diameter: "diametro",
        climate: "temperatura",
        gravity: "gravedad",
        terrain: "terreno",
        surface_water: "aguas_superficiales",
        population: "poblacion",
        residents: "residentes",
        films: "peliculas",
        created: "creado",
        edited: "editado",
        url: "enlace",
      };
      break;
    case "species":
      translate = {
        name: "nombre",
        classification: "clasificacion",
        designation: "designacion",
        average_height: "altura_promedio",
        hair_colors: "color_cabello",
        skin_colors: "color_piel",
        eye_colors: "color_ojos",
        average_lifespan: "esperanza_vida",
        homeworld: "planeta",
        language: "idioma",
        people: "personajes",
        films: "peliculas",
        created: "creado",
        edited: "editado",
        url: "enlace",
      };
      break;
    case "starships":
      translate = {
        name: "nombre",
        model: "modelo",
        manufacturer: "fabricante",
        cost_in_credits: "costo_creditos",
        length: "longitud",
        max_atmosphering_speed: "velocidad_atmosferica",
        crew: "multitud",
        passengers: "pasajeros",
        cargo_capacity: "capacidad_carga",
        consumables: "consumibles",
        hyperdrive_rating: "calificacion_hiperimpulsor",
        MGLT: "MGLT",
        starship_class: "nave_estelar",
        pilots: "pilotos",
        films: "peliculas",
        created: "creado",
        edited: "editado",
        url: "enlace",
      };
      break;
    case "vehicles":
      translate = {
        name: "nombre",
        model: "modelo",
        manufacturer: "fabricante",
        cost_in_credits: "costo_creditos",
        length: "longitud",
        max_atmosphering_speed: "velocidad_atmosferica",
        crew: "multitud",
        passengers: "pasajeros",
        cargo_capacity: "capacidad_carga",
        consumables: "consumibles",
        vehicle_class: "vehiculo_clase",
        pilots: "pilotos",
        films: "peliculas",
        created: "creado",
        edited: "editado",
        url: "enlace",
      };
      break;
  }
  if (Object.entries(translate).length === 0) {
    return modelObject;
  }
  let newObject = {};
  for (const [key] of Object.entries(modelObject)) {
    const newKey = translate[key] || key;
    newObject[newKey] = modelObject[key];
  }
  return newObject;
};

module.exports = {
  translateKeys,
};
