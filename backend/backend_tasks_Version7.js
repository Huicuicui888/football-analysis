const cron = require('node-cron');
const { fetchMatches } = require('./crawler');
const db = require('./db');

function scheduleTasks() {
  cron.schedule('0 0 * * *', async () => {
    const newMatches = await fetchMatches();
    await db.saveMatches(newMatches);
    console.log('每日自动采集完成');
  });
}
module.exports = { scheduleTasks };