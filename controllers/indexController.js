const db = require("../db/queries");

async function getGraphicsCards(req, res) {
  const graphicsCards = await db.getAllGraphicsCards();
  console.log("Graphics Cards: ", graphicsCards);
  res.send(
    "Graphics Cards Available in Inventory: " +
      graphicsCards.map((graphicsCard) => graphicsCard.name).join(", ")
  );
}

module.exports = {
  getGraphicsCards,
};
