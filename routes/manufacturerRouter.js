const { Router } = require("express");
const manufacturerRouter = Router();
const manufacturers = require("../controllers/manufacturerController");

manufacturerRouter.get("/", (req, res) => {
  manufacturers.getManufacturers(req, res);
});

manufacturerRouter.get("/create", (req, res) => {
  res.render("new_manufacturer");
});

manufacturerRouter.post("/create", (req, res) => {
  manufacturers.addManufacturer(req, res);
});
module.exports = manufacturerRouter;
