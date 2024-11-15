const db = require("../db/queries");

async function getGraphicsCards(req, res) {
  const graphicsCards = await db.getAllGraphicsCards();
  console.log("Graphics Cards: ", graphicsCards);
  res.send(
    "Graphics Cards Available in Inventory: " +
      graphicsCards.map((graphicsCard) => graphicsCard.name).join(", ")
  );
}

async function addGraphicsCard(req, res) {
  const { cardName } = req.body;
  await addGraphicsCard(cardName);
  res.redirect("/");
}

module.exports = {
  getGraphicsCards,
  addGraphicsCard,
};
