const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./football.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS matches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    home TEXT,
    away TEXT,
    homeScore INTEGER,
    awayScore INTEGER,
    league TEXT
  )`);
});

module.exports = {
  getMatches: () => new Promise((resolve, reject) => {
    db.all('SELECT * FROM matches ORDER BY date DESC', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }),
  saveMatches: (matches) => new Promise((resolve) => {
    const stmt = db.prepare('INSERT INTO matches (date, home, away, homeScore, awayScore, league) VALUES (?, ?, ?, ?, ?, ?)');
    matches.forEach(m => {
      stmt.run(m.date, m.home, m.away, m.homeScore, m.awayScore, m.league);
    });
    stmt.finalize(resolve);
  }),
};