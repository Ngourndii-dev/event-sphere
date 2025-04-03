require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Routes pour les tables de base
const tables = ['currencies', 'users', 'clients', 'event_categories', 'events', 
  'event_collaborators', 'event_comments', 'event_partners'];

tables.forEach(table => {
  app.get(`/api/${table}`, async (req, res) => {
    try {
      const result = await pool.query(`SELECT * FROM ${table}`);
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

// Route POST pour les événements
app.post('/api/events', async (req, res) => {
  try {
    const { 
      title, 
      description, 
      category_id, 
      start_date, 
      end_date, 
      location, 
      status = 'draft', 
      budget = null, 
      currency_id = 1, 
      created_by = 1 
    } = req.body;

    if (!title || !description || !category_id || !start_date || !end_date || !location) {
      return res.status(400).json({ error: 'Tous les champs obligatoires doivent être remplis' });
    }

    const result = await pool.query(
      `INSERT INTO events 
       (title, description, category_id, start_date, end_date, location, status, budget, currency_id, created_by) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
       RETURNING *`,
      [title, description, category_id, start_date, end_date, location, status, budget, currency_id, created_by]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erreur détaillée:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

// Nouvelle route POST pour les clients
app.post('/api/clients', async (req, res) => {
  try {
    const { 
      full_name, 
      email, 
      cin, 
      occupation 
    } = req.body;

    if (!full_name || !cin) {
      return res.status(400).json({ error: 'Le nom complet et le CIN sont obligatoires' });
    }

    const result = await pool.query(
      `INSERT INTO clients 
       (full_name, email, cin, occupation) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [full_name, email, cin, occupation]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erreur détaillée:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

// Autres routes existantes
app.get('/api/event_collaborators/event/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;
    const result = await pool.query(
      'SELECT * FROM event_collaborators WHERE event_id = $1',
      [eventId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/users/:id/username', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT username FROM users WHERE id = $1',
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/clients/:id/fullname', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT full_name FROM clients WHERE id = $1',
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/event_comments/event/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;
    const result = await pool.query(
      `SELECT ec.*, u.username, u.role 
       FROM event_comments ec 
       LEFT JOIN users u ON ec.client_id = u.id 
       WHERE ec.event_id = $1`,
      [eventId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error" });
  }
});

app.get('/api/event_partners/event/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;
    const result = await pool.query(
      `SELECT ep.*, c.full_name 
       FROM event_partners ep 
       JOIN clients c ON ep.client_id = c.id 
       WHERE ep.event_id = $1`,
      [eventId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});