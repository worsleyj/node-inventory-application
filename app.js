require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`inventory application listening on port ${PORT}`)
);
