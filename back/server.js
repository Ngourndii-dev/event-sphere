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

tables.forEach(table => {
  app.post(`/api/${table}`, async (req, res) => {
    try {
      const columns = Object.keys(req.body).join(', ');
      const values = Object.values(req.body);
      const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
      
      const result = await pool.query(
        `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *`,
        values
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

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
    res.status(500).json({ error: 'Internal server error' });
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