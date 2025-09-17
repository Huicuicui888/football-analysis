import React, { useState } from 'react';
export default function AnalysisControls() {
  const [loading, setLoading] = useState(false);
  const handleCrawl = async () => {
    setLoading(true);
    const res = await fetch('/api/crawl', { method: 'POST' });
    if (res.ok) alert('数据采集完成！');
    setLoading(false);
  };
  return (
    <div style={{margin:'16px 0'}}>
      <button onClick={handleCrawl} disabled={loading}>
        {loading ? '正在采集...' : '手动采集最新数据'}
      </button>
    </div>
  );
}