const express = require('express');
require('dotenv').config();
// const connection = require('./db.js');

const mysql = require('mysql2');

const connection = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME
 });

 connection.connect((err) => {
     if (err) {
         console.error('Error connecting to MySQL:', err);
         return;
     }
     console.log('Connected to MySQL');
 });



const app = express();
app.use(express.json());

// CRUD operations
// Create a new user
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;
  connection.query('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send(`User added with ID: ${results.insertId}`);
  });
});

// Read all users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Read a user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  connection.query('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User updated successfully');
  });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User deleted successfully');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
