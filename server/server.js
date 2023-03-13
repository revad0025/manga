const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


app.listen(port => {
  console.log(`Server is running on port: ${port}`);
})


const db = require('./database.js');
app.post('/api/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const insert = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
  db.run(insert, [name, email, bcrypt.hashSync(password, 10)], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    res.json({
      message: 'User created successfully.',
      data: {
        id: this.lastID,
        name: name,
        email: email,
      }
    });
  });
});

app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.get(query, email, (err, row) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!row) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(password, row.password);
    if (!passwordIsValid) {
      return res.status(401).json({ auth: false, token: null, error: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: row.id }, 'secret', { expiresIn: 86400 });

    res.json({ auth: true, token: token });
  });
});