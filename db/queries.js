const pool = require("./pool");

async function getAllGraphicsCards() {
  const { rows } = await pool.query("SELECT * FROM graphics_cards");
  return rows;
}

async function insertGraphicsCard(cardName) {
  await pool.query("INSERT INTO graphics_cards (name) VALUES ($1)", [cardName]);
}

module.exports = {
  getAllGraphicsCards,
  insertGraphicsCard,
};
