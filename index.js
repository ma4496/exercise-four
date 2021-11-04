const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const indexRoute = require("./routes/index");
app.use("/", indexRoute);

app.get("/", (req, res) => {
  res.send("Hello World in Routes");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
