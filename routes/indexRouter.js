const { Router } = require("express");
const indexRouter = Router();
const queries = require("../controllers/indexController");

indexRouter.get("/", (req, res) => {
  queries.getGraphicsCards(req, res);
});

indexRouter.get("/create", (req, res) => {
  res.render("new_graphics_card");
});

indexRouter.post("/create", (req, res) => {
  queries.addGraphicsCard(req, res);
});

module.exports = indexRouter;
