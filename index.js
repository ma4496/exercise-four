const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const indexRoute = require("./routes/index");

app.use("/", indexRoute);

app.get("/", (req, res) => {
  res.send("Hello Wordl!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
