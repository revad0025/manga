const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const DBSOURCE = "users.db";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to SQLite database.');
    db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text UNIQUE,
            password text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
          db.run(insert, ['admin', 'admin@example.com', bcrypt.hashSync('admin', 10)]);
          db.run(insert, ['user', 'user@example.com', bcrypt.hashSync('user', 10)]);
        }
      });
  }
});