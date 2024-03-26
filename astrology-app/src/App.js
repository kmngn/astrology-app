import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/daily');
        setData(response.data);
        console.log("success");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, "");

  return (
    <div className='quote'>
      ♡ {data.daily}
    </div>
  );
}

export default App;
