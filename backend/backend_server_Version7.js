require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const { fetchMatches } = require('./crawler');
const { analyzeMatches } = require('./analysis');
const { scheduleTasks } = require('./tasks');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/matches', async (req, res) => {
  const matches = await db.getMatches();
  res.json(matches);
});

app.get('/api/analysis', async (req, res) => {
  const matches = await db.getMatches();
  const analysis = analyzeMatches(matches);
  res.json(analysis);
});

app.post('/api/crawl', async (req, res) => {
  const newMatches = await fetchMatches();
  await db.saveMatches(newMatches);
  res.json({ status: 'success', count: newMatches.length });
});

scheduleTasks();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});