const db = require("../db/queries");

async function getParts(req, res) {
  const parts = await db.getAllParts();
  console.log("Parts: ", parts);
  res.send(
    "Parts Available in Inventory: " + parts.map((part) => part.name).join(", ")
  );
}

async function addPart(req, res) {
  const { partName, type, manufacturer, quantity } = req.body;
  // console.log(partName, type, manufacturer, quantity);

  await db.insertPart(partName, type, manufacturer, quantity);
  res.redirect("/");
}

module.exports = {
  getParts,
  addPart,
};
