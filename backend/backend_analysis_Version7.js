function analyzeMatches(matches) {
  const summary = {
    homeWin: 0,
    awayWin: 0,
    draw: 0,
    total: matches.length
  };
  matches.forEach(m => {
    if (m.homeScore > m.awayScore) summary.homeWin++;
    else if (m.homeScore < m.awayScore) summary.awayWin++;
    else summary.draw++;
  });
  summary.homeWinRate = summary.total ? summary.homeWin / summary.total : 0;
  summary.awayWinRate = summary.total ? summary.awayWin / summary.total : 0;
  summary.drawRate = summary.total ? summary.draw / summary.total : 0;
  return summary;
}
module.exports = { analyzeMatches };