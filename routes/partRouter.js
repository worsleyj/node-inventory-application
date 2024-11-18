const { Router } = require("express");
const indexRouter = Router();
const queries = require("../controllers/partController");

indexRouter.get("/", (req, res) => {
  queries.getParts(req, res);
});

indexRouter.get("/create", (req, res) => {
  res.render("new_part");
});

indexRouter.post("/create", (req, res) => {
  queries.addPart(req, res);
});

module.exports = indexRouter;
