const pool = require("./pool");

async function getAllParts() {
  const { rows } = await pool.query("SELECT * FROM parts");
  return rows;
}

async function insertPart(partName, type, manufacturer, quantity) {
  await pool.query(
    "INSERT INTO parts (name, type, manufacturer, quantity)  VALUES ($1, $2, $3, $4)",
    [partName, type, manufacturer, quantity]
  );
}
module.exports = {
  getAllParts,
  insertPart,
};
