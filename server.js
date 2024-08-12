const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jain@2001",
  database: "banner_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/api/banner", (req, res) => {
  db.query("SELECT * FROM banner WHERE id = 1", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

app.post("/api/banner", (req, res) => {
  const { description, timer, link } = req.body;

  db.query(
    "UPDATE banner SET description = ?, timer = ?, link = ? WHERE id = 1",
    [description, timer, link],
    (err, result) => {
      if (err) return res.status(500).send(err);
      console.log("MySQL Update Result:", result);
      res.json({ success: true });
    }
  );
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
