const connection = require('./../config');
const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.get('/', function (req, res) {
  connection.query('SELECT * FROM students', (err, rows) => {
    if (err) res.json('error');
    res.json(rows);
  })
})

router.get('/:id', function (req, res) {
  connection.query('SELECT * FROM students WHERE ID=?', req.params.id, (err, rows) => {
    if (err) res.json('error');
    res.json(rows);
  })
})

router.post('/', function (req, res) {
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let gender = req.body.gender;
  let city = req.body.city;

  const query = `INSERT INTO students (ID, Name, phone, email, gender, city) VALUES (NULL, ?, ?, ?, ?, ?)`;
  connection.query(query, [name, phone, email, gender, city], (err, results) => {
    if (err) res.json('error')
    res.json(results);
  })
})

router.put('/:id', function (req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let gender = req.body.gender;
  let city = req.body.city;

  const query = `UPDATE students SET Name=?, phone=?, email=?, gender=?, city=? WHERE ID=?`;
  connection.query(query, [name, phone, email, gender, city, id], (err, results) => {
    if (err) res.json('error')
    res.json(results);
  })
})

router.delete('/:id', function (req, res) {
  let id = req.params.id;

  const query = `DELETE FROM students WHERE ID=?`;
  connection.query(query, [id], (err, results) => {
    if (err) res.json('error')
    res.json(results);
  })
})

module.exports = router;