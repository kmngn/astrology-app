import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/quote');
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
       "{data.daily}"
    </div>
  );
}

export default Quotes;
