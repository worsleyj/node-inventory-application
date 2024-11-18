const db = require("../db/queries");

async function getParts(req, res) {
  const parts = await db.getAllParts();
  console.log("Parts: ", parts);
  res.send(
    "Parts Available in Inventory: " + parts.map((part) => part.name).join(", ")
  );
}

async function addPart(req, res) {
  const { partName, manufacturer } = req.body;
  console.log(partName + " " + manufacturer);

  await db.insertPart(partName);
  res.redirect("/");
}

module.exports = {
  getParts,
  addPart,
};
