import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData(endPoint) {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/' + endPoint);
          setData(response.data);
          console.log("success" + endPoint);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, "");

    return (
        data
    );
}

export default FetchData;
