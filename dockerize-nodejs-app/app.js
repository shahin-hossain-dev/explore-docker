const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Node js app is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/message", (req, res) => {
  res.send("Here is another message");
});
