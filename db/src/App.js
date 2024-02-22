import React, { useState, useEffect } from 'react';
import App1 from './app1';

function App() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8000/getData')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  };

  return (
    // <App1 data={data} />
    <App1></App1>
  );
}

export default App;
