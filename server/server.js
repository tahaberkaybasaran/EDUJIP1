const express = require("express"); // imports
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors()); // web security
app.use(express.json()); // for parsing data from the http request

const port = 5000; // specify the port, the place where server will listen

// creating connection to server interaction with mySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "students",
});

app.listen(port, () => {
  console.log("server has started to listen");
});
