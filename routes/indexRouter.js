const { Router } = require("express");
const indexRouter = Router();
const queries = require("../controllers/indexController");

indexRouter.get("/", (req, res) => {
  // res.render("index");
  queries.getGraphicsCards(req, res);
});

module.exports = indexRouter;
