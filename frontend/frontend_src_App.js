import React, { useEffect, useState } from 'react';
import MatchTable from './components/MatchTable';
import Charts from './components/Charts';
import AnalysisControls from './components/AnalysisControls';

function App() {
  const [matches, setMatches] = useState([]);
  const [analysis, setAnalysis] = useState({});
  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(setMatches);
    fetch('/api/analysis')
      .then(res => res.json())
      .then(setAnalysis);
  }, []);
  return (
    <div style={{maxWidth:800,margin:'0 auto'}}>
      <h1>足球分析工具</h1>
      <AnalysisControls />
      <Charts analysis={analysis} />
      <MatchTable matches={matches} />
    </div>
  );
}
export default App;