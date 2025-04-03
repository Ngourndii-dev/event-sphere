require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(bodyParser.json());

// Middleware pour vérifier si l'utilisateur est admin
const verifyAdmin = async (req, res, next) => {
  const { userId } = req.body; // Supposons que l'ID utilisateur soit envoyé dans le body
  const result = await pool.query('SELECT role FROM users WHERE id = $1', [userId]);
  if (result.rows.length && result.rows[0].role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Accès interdit' });
  }
};

// Middleware pour vérifier si l'utilisateur est authentifié
const verifyUser = async (req, res, next) => {
  const { userId } = req.body;
  const result = await pool.query('SELECT id FROM users WHERE id = $1', [userId]);
  if (result.rows.length) {
    next();
  } else {
    res.status(401).json({ message: 'Utilisateur non authentifié' });
  }
};
// GET toutes les données des tables
const tables = ['currencies', 'users', 'clients', 'event_categories', 'events', 'event_collaborators', 'event_comments', 'event_partners'];
tables.forEach((table) => {
  app.get(`/api/${table}`, async (req, res) => {
    try {
      const result = await pool.query(`SELECT * FROM ${table}`);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
});

// POST pour ajouter un événement (utilisateurs authentifiés)
app.post('/api/events', verifyUser, async (req, res) => {
  const { title, description, category_id, start_date, end_date, location, status, budget, currency_id, created_by } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (title, description, category_id, start_date, end_date, location, status, budget, currency_id, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [title, description, category_id, start_date, end_date, location, status, budget, currency_id, created_by]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH pour modifier un utilisateur (admin uniquement)
app.patch('/api/users/:id', verifyAdmin, async (req, res) => {
  const { id } = req.params;
  const { full_name, username, email, role, is_active } = req.body;
  try {
    const result = await pool.query(
      'UPDATE users SET full_name = $1, username = $2, email = $3, role = $4, is_active = $5, updated_at = NOW() WHERE id = $6 RETURNING *',
      [full_name, username, email, role, is_active, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE un utilisateur (admin uniquement)
app.delete('/api/users/:id', verifyAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
