const { Router } = require("express");
const indexRouter = Router();

router.get("/", (req, res) => {
  res.render("index");
});
