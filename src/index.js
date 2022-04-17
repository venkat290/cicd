require("dotenv").config();
let express = require("express");
let { quote, getRecord } = require("./quotes.js");

let port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  return res.send(quote());
});

app.get("/getCustomer", async (req, res) => {
  let result = await getRecord();
  return res.send(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
