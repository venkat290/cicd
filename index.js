import "dotenv/config";
import express from "express";
console.log("Env");
let port = process.env.port;
const app = express();

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
