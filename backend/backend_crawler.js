const axios = require('axios');

const API_TOKEN = process.env.API_TOKEN || 'c6db965a349846d29858651006b185a';

const fetchMatches = async () => {
  const url = 'https://api.football-data.org/v4/competitions/PL/matches';
  const headers = { 'X-Auth-Token': API_TOKEN };
  const res = await axios.get(url, { headers });
  if (!res.data.matches) return [];
  return res.data.matches.map(match => ({
    date: match.utcDate,
    home: match.homeTeam.name,
    away: match.awayTeam.name,
    homeScore: match.score.fullTime.home,
    awayScore: match.score.fullTime.away,
    league: match.competition.name,
  }));
};

module.exports = { fetchMatches };