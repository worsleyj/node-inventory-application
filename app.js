require("dotenv").config();
const express = require("express");
const app = express();
const partsRouter = require("./routes/partRouter");
const manufacturerRouter = require("./routes/manufacturerRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/parts", partsRouter);
app.use("/manufacturers", manufacturerRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`inventory application listening on port ${PORT}`)
);
