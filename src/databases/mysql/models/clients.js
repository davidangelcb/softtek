const { database } = require("../model");
const { Sequelize } = require("sequelize");

// CLients Model
const clients = database.define("clients", {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  dni: {
    type: Sequelize.INTEGER,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  linkedin: {
    type: Sequelize.STRING,
  },
  estatus: {
    type: Sequelize.STRING,
  },
});

const Clients = {
  find: async () => {
    const data = await clients.findAll();
    return data;
  },
  findByPk: async (id) => {
    const client = await clients.findByPk(id);
    if (client) {
      return client.toJSON();
    } else {
      return null;
    }
  },
  findWithPagination: async (pagination) => {
    const { offset, per_page } = pagination;

    const { count, rows } = await clients.findAndCountAll({
      limit: Number(per_page),
      offset: Number(offset),
    });

    return { rows, count };
  },
  create: async (newClient) => {
    const client = await clients.create(newClient);
    //console.log('Usuario creado:', client);
    return client;
  },
};

exports.Clients = Clients;
