import { ErrorComponent } from "./ErrorComponent";
import { getData } from "./http";
import React, { useState, useEffect } from "react";

const GetComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const result = await getData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError({
          message: error.message || "Fetch data failed",
          title: "Unable to Fetch the data",
        });
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {error && <ErrorComponent title={error.title} message={error.message} />}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {/* Render your data here */}
          {data.map((data) => (
            <li key={data.id} role="listitem">
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetComponent;
