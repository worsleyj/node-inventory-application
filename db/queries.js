const pool = require("./pool");

async function getAllGraphicsCards() {
  const { rows } = await pool.query("SELECT * FROM graphics_cards");
  return rows;
}

module.exports = {
  getAllGraphicsCards,
};
