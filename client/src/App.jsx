import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    axios.get('http://localhost:5000/health')
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('Server Down'));
  }, []);

  return (
    <div className="App">
      <h1>Backend Status: {status}</h1>
    </div>
  );
}

export default App;
