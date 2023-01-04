const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello to Tony's Continuous Delivery ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
