const db = require("../db/manufacturerQueries");

async function getManufacturers(req, res) {
  const manufacturers = await db.getAllManuFacturers();
  res.send(
    "Manufacturers in Database: " +
      manufacturers.map((manufacturer) => manufacturer.name).join(", ")
  );
}

async function addManufacturer(req, res) {
  const { name } = req.body;
  await db.insertManufacturer(name);
  res.redirect("/");
}

module.exports = { getManufacturers, addManufacturer };
