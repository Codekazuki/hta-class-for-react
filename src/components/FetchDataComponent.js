import React, { useState, useEffect } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchAnotherFact = () => {
    fetchData();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='cont'>
      <h1>Fetched Data</h1>
      <p className='fact'>{data.fact}</p>
      <button className='fetch-btn' onClick={fetchAnotherFact}>
        Fetch another Fact
      </button>
    </div>
  );
};

export default FetchDataComponent;
