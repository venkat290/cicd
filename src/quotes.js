var mysql = require("mysql");
const util = require("util");
let quote = () => {
  return "hello World Changed";
};

let getRecord = async () => {
  let config = {
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    database: process.env.database,
  };
  try {
    var conn = mysql.createConnection(config);
    conn.connect(function (err) {
      if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
      }

      console.log("Connected to database.");
    });
    const query = util.promisify(conn.query).bind(conn);
    console.log("query", query);
    let result = await query("SELECT * FROM customers");
    conn.end();
    return result;
  } catch (er) {
    console.log(er.message);
    config.error = er.message;
    return config;
  }
};
module.exports = {
  quote,
  getRecord,
};
