const { Router } = require("express");
const indexRouter = Router();
const queries = require("../controllers/indexController");

indexRouter.get("/", (req, res) => {
  queries.getGraphicsCards(req, res);
});

module.exports = indexRouter;
