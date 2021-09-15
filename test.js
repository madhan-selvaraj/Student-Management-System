const students = require('./MOCK_DATA');
const connection = require('./config');

const query = `INSERT INTO students (ID, Name, email, gender, phone, city) VALUES (NULL, ?, ?, ?, ?, ?)`;

students.forEach(student => {
  let values = Object.values(student);
  connection.query(query, values, (err, rows) => {
    if(err) console.log(err);
    console.log('All rows inserted');
  })
})