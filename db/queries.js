const pool = require("./pool");

async function getAllParts() {
  const { rows } = await pool.query("SELECT * FROM parts");
  return rows;
}

async function addPart(partName) {
  await pool.query("INSERT INTO parts (name) VALUES ($1)", [partName]);
}

module.exports = {
  getAllParts,
  addPart,
};
