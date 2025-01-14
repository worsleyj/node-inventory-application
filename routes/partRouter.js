const { Router } = require("express");
const partRouter = Router();
const parts = require("../controllers/partController");

partRouter.get("/", (req, res) => {
  parts.getParts(req, res);
});

const partNum = "/1";

partRouter.get(partNum, (req, res) => {
  parts.getParts(req, res);
});

partRouter.get("/create", (req, res) => {
  res.render("new_part");
});

partRouter.post("/create", (req, res) => {
  parts.addPart(req, res);
});

module.exports = partRouter;
