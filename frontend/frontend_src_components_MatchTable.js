import React from 'react';
export default function MatchTable({ matches }) {
  return (
    <table border="1" cellPadding="6" style={{ width: '100%', marginTop: 12 }}>
      <thead>
        <tr>
          <th>日期</th>
          <th>联赛</th>
          <th>主队</th>
          <th>客队</th>
          <th>主队得分</th>
          <th>客队得分</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((m, i) => (
          <tr key={i}>
            <td>{m.date}</td>
            <td>{m.league}</td>
            <td>{m.home}</td>
            <td>{m.away}</td>
            <td>{m.homeScore}</td>
            <td>{m.awayScore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}