import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8888/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // []는 컴포넌트가 마운트될 때 한 번만 실행됨 jjjjj

  return (
    <div>
      <h1>Main Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Data from Backend:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MainPage;
