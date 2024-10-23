const { Clients } = require("../../databases/mysql/models/clients");

async function create(req, res) {
  let today = new Date();

  const newCleaner = {
    ...req.body,
    createdAt: today,
    updatedAt: today,
    estatus: "E", // E => Enabled  D => Disabled
  };

  try {
    const result = await Clients.create(newCleaner);
    res.json(result);
  } catch (err) {
    process.env.STAGE === "dev"
      ? res.status(400).json(err)
      : res.status(400).json({ message: "Malformed payload" });
  }
}

module.exports = {
  create,
};
