const pool = require("./pool");

async function getAllGraphicsCards() {
  const { rows } = await pool.query("SELECT * FROM parts");
  return rows;
}

async function insertGraphicsCard(cardName) {
  await pool.query("INSERT INTO parts (name) VALUES ($1)", [cardName]);
}

module.exports = {
  getAllGraphicsCards,
  insertGraphicsCard,
};
