import React from 'react';

export default function Charts({ analysis }) {
  const total = analysis.total || 0;
  return (
    <div style={{margin:'24px 0'}}>
      <h2>比赛结果统计</h2>
      <ul>
        <li>主胜：{analysis.homeWin} ({((analysis.homeWinRate||0)*100).toFixed(1)}%)</li>
        <li>客胜：{analysis.awayWin} ({((analysis.awayWinRate||0)*100).toFixed(1)}%)</li>
        <li>平局：{analysis.draw} ({((analysis.drawRate||0)*100).toFixed(1)}%)</li>
        <li>总场次：{total}</li>
      </ul>
    </div>
  );
}