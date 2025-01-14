const pool = require("./pool");

async function getAllManuFacturers() {
  const { rows } = await pool.query("SELECT * from manufacturers");
  return rows;
}

async function insertManufacturer(name) {
  await pool.query("INSERT INTO manufacturers (name) Values ($1)", [name]);
}

module.exports = {
  getAllManuFacturers,
  insertManufacturer,
};
