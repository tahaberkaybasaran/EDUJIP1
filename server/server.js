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

app.post("/add_user", (req, res) => {
  //POST request to API endpoint for add data to DB
  const sql =
    "INSERT INTO students_informations (tc,ad,soyad,okul_adi,okul_no) VALUES (?,?,?,?,?)"; // SQL query creates data from received data

  const values = [
    req.body.tc,
    req.body.name,
    req.body.surname,
    req.body.schoolName,
    req.body.schoolNo,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      return res.json({ message: "An error has occured" + err });
    }
    return res.json({ message: "SUCCESS student data has added" });
  });
});

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students_informations";
  db.query(sql, (err, result) => {
    if (err) {
      res.json({ message: "Server error" });
    }
    return res.json(result);
  });
});

app.get("/get_student/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM students_informations WHERE `id`= ?";
  db.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.post("/edit_user/:id", (req, res) => {
  //POST request to API endpoint for add data to DB
  const id = req.params.id;
  const sql =
    "UPDATE INTO students_informations SET `tc`=?, `ad`=?, `soyad`=?, `okul_adi`=?, `okul_no`=? WHERE id=?"; // SQL query creates data from received data

  const values = [
    req.body.tc,
    req.body.name,
    req.body.surname,
    req.body.schoolName,
    req.body.schoolNo,
    id,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      return res.json({ message: "An error has occured" + err });
    }
    return res.json({ message: "SUCCESS student data has added" });
  });
});

app.listen(port, () => {
  console.log("server has started to listen");
});
